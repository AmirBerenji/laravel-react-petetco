<?php

namespace App\DTO;

use Spatie\LaravelData\Data;

class BranchStoreDto extends Data
{
    public function __construct(
        public string $name,
        public string $phone,
        public string $address,
        public string $email,
        public Clinic $clinic,
    ) {}

    public static function rules(): array
    {
        return [
            'id' => 'required|int',
            'name' => 'required|string|max:255',
        ];
    }
}
