<?php

namespace App\Services;

use App\DTO\BranchDto;

class BranchService
{
    public function addBranch(BranchDto $entity): void
    {
        $entity->clinic->branches()->create([
            'name' => $entity->name,
            'address' => $entity->address,
            'phone' => $entity->phone,
            'email' => $entity->email,
            'user_id' => $entity->clinic->user_id,
        ]);
    }
}
