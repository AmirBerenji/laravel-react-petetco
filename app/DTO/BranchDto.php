<?php

namespace App\DTO;

use App\Models\User;
use Spatie\LaravelData\Data;

class BranchDto extends Data
{
    public function __construct(
        public ?int $id,

        public string $name,

        public string $phone,

        public string $address,

        public string $email,

        public int $clinic_id,

        public User $user
    ) {}
}
