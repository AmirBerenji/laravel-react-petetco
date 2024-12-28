<?php

namespace App\Services;

use App\DTO\BranchDto;

class BranchService
{
    public function addBranch(BranchDto $entity): void
    {
        $clinic = $entity->user->clinics->firstWhere('id', $entity->clinic_id);

        if ($clinic) {
            $clinic->branches()->create([
                'name' => $entity->name,
                'address' => $entity->address,
                'phone' => $entity->phone,
                'email' => $entity->email,
                'user_id' => $entity->user->id,
            ]);
        }
    }
}
