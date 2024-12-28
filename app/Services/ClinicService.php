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
        $clinics = $user->clinics()->get();

        return ClinicDto::collect($clinics);
    }

    public function addClinic(ClinicBranchAddDto $clinic): Clinic
    {
        $result = $clinic->user->clinics()->create(['name' => $clinic->name]);

        if ($result) {
            $branchDto = new BranchDto(id: null,
                name: $clinic->name,
                phone: $clinic->phone,
                address: $clinic->address,
                email: $clinic->email,
                clinic_id: $result->id,
                user: $clinic->user);
            $branchService = new BranchService;
            $branchService->addBranch($branchDto);
        }

        return $result;
    }
}
