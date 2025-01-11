<?php

namespace App\Services;

use App\DTO\BranchDto;
use App\DTO\ClinicBranchAddDto;
use App\DTO\ClinicDto;
use App\DTO\CliniceditDto;
use App\Interfaces\IClinicRepository;
use App\Jobs\SendNewClinicEmail;
use App\Models\Clinic;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Collection;

class ClinicService implements IClinicRepository
{
    /**
     * @return Collection<ClinicDto>
     */
    public function getByUser(User $user): Collection
    {
        $clinics = $user->clinics()->with('branches')->get();

        return ClinicDto::collectFromClinics($clinics);
    }

    public function addClinic(ClinicBranchAddDto $clinic): Clinic
    {
        /** @var Clinic $newClinic */
        $newClinic = $clinic->user->clinics()->create(['name' => $clinic->name]);

        SendNewClinicEmail::dispatch($clinic->user);

        if ($newClinic) {

            $newClinic->handleImages($clinic->files);

            $branchDto = new BranchDto(
                name: $clinic->name,
                phone: $clinic->phone,
                address: $clinic->address,
                email: $clinic->email,
                clinic: $newClinic
            );

            (new BranchService)->addBranch($branchDto);
        }

        return $newClinic;
    }

    public function editClinic(CliniceditDto $clinic): collection
    {
        /** @var Clinic $oldClinic */
        $oldClinic = $clinic->user->clinics()->where('id', $clinic->id)->first();

        if ($oldClinic) {
            $oldClinic->handleImages($clinic->files, true);
            $oldClinic->update(['name' => $clinic->name]);
        }

        return $this->getByUser($clinic->user);
    }

    public function getClinicById(int $id): Clinic
    {
        $clinic = Clinic::find($id);
        if ($clinic) {
            return $clinic;
        } else {
            throw new ModelNotFoundException;
        }
    }
}
