<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin User
 */
class AuthUserResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'created_at' => $this->created_at->format('Y-m-d h:i:s'),
            'email' => $this->email,
            'permissions' => $this->getAllPermissions()->
                map(function ($permission) {
                    return $permission->name;
                }),
            'roles' => $this->getRoleNames(),
        ];
    }
}
