<?php

namespace App\Http\Controllers;

use App\Enum\PermissionsEnum;
use App\Http\Resources\FeatureListResource;
use App\Http\Resources\FeatureResource;
use App\Models\Feature;
use App\Models\Upvote;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class FeatureController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            'auth',
            'verified',
            new Middleware('can:'.PermissionsEnum::ManageFeature->value, except: ['index', 'show']),
        ];
    }

    public function index()
    {
        $currentUser = Auth::id();
        //  $paginated = Feature::latest()
        //      ->withCount(['upvotes as upvout_count' => function($query){
        //          $query->select(DB::raw('SUM(CASE WHEN upvote = 1 THEN 1 ELSE -1 END)'));
        //      }])
        //      ->withExists([
        //          'upvotes as user_has_upvoted' => function($query) use($currentUser){
        //              $query->where('user_id',$currentUser)
        //              ->where('upvote',1);
        //          },
        //          'upvotes as user_has_downvoted' => function($query) use($currentUser){
        //              $query->where('user_id',$currentUser)
        //              ->where('upvote',0);
        //          }
        //      ])
        //      ->paginate();

        $paginated = Feature::latest()
            ->addSelect([
                'upvote_count' => Upvote::selectRaw('SUM(CASE WHEN upvote = 1 THEN 1 ELSE -1 END)')
                    ->whereColumn('feature_id', 'features.id'),
                'user_has_upvoted' => Upvote::selectRaw('EXISTS(SELECT 1 FROM upvotes WHERE upvotes.feature_id = features.id AND upvotes.user_id = ? AND upvotes.upvote = 1)', [$currentUser]),
                'user_has_downvoted' => Upvote::selectRaw('EXISTS(SELECT 1 FROM upvotes WHERE upvotes.feature_id = features.id AND upvotes.user_id = ? AND upvotes.upvote = 0)', [$currentUser]),
            ])
            ->paginate();

        return Inertia::render('Feature/Index', [
            'features' => FeatureListResource::collection($paginated),
        ]);
    }

    public function create()
    {
        return Inertia::render('Feature/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string'],
            'description' => ['nullable', 'string'],
        ]);

        $data['user_id'] = Auth::id();

        Feature::create($data);

        return to_route('feature.index')->with('success', 'Feature created successfully');
    }

    public function show(Feature $feature)
    {
        $feature->upvote_count = Upvote::where('feature_id', $feature->id)
            ->selectRaw('SUM(CASE WHEN upvote = 1 THEN 1 ELSE -1 END) as upvote_sum')
            ->value('upvote_sum') ?? 0;

        $feature->user_has_upvoted = Upvote::where('feature_id', $feature->id)
            ->where('user_id', Auth::id())
            ->where('upvote', 1)
            ->exists();

        $feature->user_has_downvoted = Upvote::where('feature_id', $feature->id)
            ->where('user_id', Auth::id())
            ->where('upvote', 0)
            ->exists();

        return Inertia::render('Feature/Show', [
            'feature' => new FeatureResource($feature),
        ]);
    }

    public function edit(Feature $feature)
    {
        return Inertia::render('Feature/Edit', [
            'feature' => new FeatureResource($feature),
        ]);
    }

    public function update(Request $request, Feature $feature)
    {
        $data = $request->validate([
            'name' => ['required', 'string'],
            'description' => ['nullable', 'string'],
        ]);

        $feature->update($data);

        return to_route('feature.index')->with('success', 'Feature updated successfully');

    }

    public function destroy(Feature $feature)
    {
        $feature->delete();

        return to_route('feature.index')->with('success', 'Feature deleted successfully');

    }
}
