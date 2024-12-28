<?php

namespace App\DTO;

use Spatie\LaravelData\Data;

class ClinicDto extends Data
{
    public function __construct(
        public ?int $id,
        public string $name,
        public int $user_id,
    ) {}
}
