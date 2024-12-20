<?php

namespace App\Http\Controllers;

use App\Enum\RolesEnum;
use App\Http\Resources\AuthUserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            'auth',
            new Middleware('role:'.RolesEnum::Admin->value),
        ];
    }

    public function index()
    {
        $users = User::all();

        return Inertia::render('User/Index', [
            'users' => AuthUserResource::collection($users)->collection->toArray(),
        ]);
    }

    public function edit(User $user)
    {
        return Inertia::render('User/Edit', [
            'user' => new AuthUserResource($user),
            'roles' => Role::all(),
            'roleLabels' => RolesEnum::labels(),
        ]);
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'roles' => ['required', 'array'],
        ]);

        $user->syncRoles($data['roles']);

        return back()->with('success', 'Role updated successfuly.');
    }
}
