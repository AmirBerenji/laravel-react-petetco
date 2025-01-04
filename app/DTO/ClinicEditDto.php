<?php

namespace App\DTO;

use App\Models\User;
use Spatie\LaravelData\Data;

class ClinicEditDto extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public User $user,
        public array $files = []
    ) {}

    public static function rules(): array
    {
        return [
            'id' => 'required|int',
            'name' => 'required|string|max:255',
            'logo' => 'nullable|image|size:5000',
            'banner' => 'nullable|image|size:5000',
        ];
    }
}
