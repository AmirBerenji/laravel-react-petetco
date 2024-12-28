<?php

namespace App\Http\Resources;

use App\DTO\ClinicDto;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin ClinicDto
 */
class ClinicResource extends JsonResource
{
    public static $wrap = false;

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'user' => new UserResource($this->user),
            'branches' => BranchResource::collection($this->branches),
        ];
    }
}
