<?php

namespace App\DTO;

use App\Models\Clinic;
use Spatie\LaravelData\Attributes\FromRouteParameter;
use Spatie\LaravelData\Data;

class BranchDto extends Data
{
    public function __construct(
        // public ?int $id,

        public string $name,

        public string $phone,

        public string $address,

        public string $email,

        // #[FromRouteParameter('clinic')]
        public Clinic $clinic,
    ) {}

    public static function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'nullable|email',
            'phone' => 'required|string|max:15',
            'address' => 'required|string',
            'clinic' => 'required',
        ];
    }
}
