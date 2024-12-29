<?php

namespace App\Services;

use App\DTO\BranchDto;
use App\DTO\ClinicBranchAddDto;
use App\DTO\ClinicDto;
use App\Interfaces\IClinicRepository;
use App\Models\Clinic;
use App\Models\User;
use Illuminate\Support\Collection;

class ClinicService implements IClinicRepository
{
    /**
     * @return Collection<ClinicDto>
     */
    public function getByUser(User $user): Collection
    {
        $clinics = $user->clinics()->with('branches')->get();

        return ClinicDto::collect($clinics);
    }

    private function uploadImage(array $files, string $category, Clinic $clinic): void
    {
        if (isset($files[$category])) {
            $clinic->addMedia($files[$category])->toMediaCollection($category);
        }
    }

    public function addClinic(ClinicBranchAddDto $clinic): Collection
    {
        $newClinic = $clinic->user->clinics()->create(['name' => $clinic->name]);

        if ($newClinic) {

            foreach (['logo', 'banner'] as $category) {
                $this->uploadImage($clinic->files, $category, $newClinic);
            }

            $branchDto = new BranchDto(
                id: null,
                name: $clinic->name,
                phone: $clinic->phone,
                address: $clinic->address,
                email: $clinic->email,
                clinic: $newClinic
            );

            (new BranchService)->addBranch($branchDto);
        }

        return $this->getByUser($clinic->user);
    }
}
