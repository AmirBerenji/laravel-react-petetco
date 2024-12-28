<?php

namespace App\Http\Resources;

use App\DTO\BranchDto;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin BranchDto
 */
class BranchResource extends JsonResource
{
    public static $wrap = false;

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'address' => $this->address,
            'phone' => $this->phone,
            'clinic_id' => $this->clinic_id,
        ];
    }
}
