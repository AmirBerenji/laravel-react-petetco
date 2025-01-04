<?php

namespace App\Http\Controllers\Web;

use App\DTO\BranchDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\Branch\BranchStoreRequest;
use App\Models\Clinic;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Inertia\Inertia;

class BranchController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            'auth',
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Clinic $clinic)
    {

        return Inertia::render('Branch/Create', ['clinic' => $clinic]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BranchStoreRequest $request)
    {
        $dto = BranchDto::from(array_merge($request->validated(), ['user' => $request->user()]));
        dd($dto);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
