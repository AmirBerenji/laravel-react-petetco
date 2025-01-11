<?php

namespace App\Services;

use App\DTO\BranchDto;
use App\DTO\BranchUpdateDto;
use App\Models\Branch;

class BranchService
{
    public function addBranch(BranchDto $entity): Branch
    {
        return $entity->clinic->branches()->create([
            'name' => $entity->name,
            'address' => $entity->address,
            'phone' => $entity->phone,
            'email' => $entity->email,
            'user_id' => $entity->clinic->user_id,
        ]);
    }

    public function updateBranch(BranchUpdateDto $entity, Branch $branch): bool
    {
        return $branch->update(
            [
                'name' => $entity->name,
                'address' => $entity->address,
                'phone' => $entity->phone,
                'email' => $entity->email,
            ]
        );
    }

    public function deleteBranch(Branch $branch): void
    {
        $branch->delete();
    }
}
