<?php

namespace App\DTO;

use App\Models\User;
use Spatie\LaravelData\Data;

class ClinicBranchAddDto extends Data
{
    public function __construct(
        public string $name,
        public string $address,
        public string $phone,
        public string $email,
        public User $user,
    ) {}

    public static function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'nullable|email',
            'phone' => 'required|string|max:15',
            'address' => 'required|string',
        ];
    }
}
