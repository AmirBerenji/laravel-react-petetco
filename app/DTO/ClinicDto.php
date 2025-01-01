<?php

namespace App\DTO;

use App\Models\Clinic;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;

class ClinicDto extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public int $user_id,
        public string $logo,
        public string $banner,
        public Collection $branches
    ) {}

    // Static method to map a Clinic model to ClinicDto
    public static function fromClinic(Clinic $clinic): ClinicDto
    {
        return new self(
            id: $clinic->id,
            name: $clinic->name,
            user_id: $clinic->user_id,
            logo: $clinic->getImageUrl('logo') ?: '',
            banner: $clinic->getImageUrl('banner') ?: '',
            branches: $clinic->branches
        );
    }

    // Optionally, you could also use this method to handle the transformation for a collection
    public static function collectFromClinics(Collection $clinics): Collection
    {
        return $clinics->map(fn ($clinic) => self::fromClinic($clinic));
    }
}
