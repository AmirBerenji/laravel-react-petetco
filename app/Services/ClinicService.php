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
use Illuminate\Support\Collection;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

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

    /**
     * @throws FileDoesNotExist
     * @throws FileIsTooBig
     */
    public function addClinic(ClinicBranchAddDto $clinic): Collection
    {
        /** @var Clinic $newClinic */
        $newClinic = $clinic->user->clinics()->create(['name' => $clinic->name]);

        SendNewClinicEmail::dispatch($clinic->user);

        if ($newClinic) {

            foreach ($clinic->files as $key => $file) {
                $newClinic->uploadImage($file, $key);
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

    /**
     * @throws FileDoesNotExist
     * @throws FileIsTooBig
     */
    public function editClinic(CliniceditDto $clinic): collection
    {
        /** @var Clinic $oldClinic */
        $oldClinic = $clinic->user->clinics()->where('id', $clinic->id)->first();

        if ($oldClinic) {
            $oldClinic->update(['name' => $clinic->name]);

            foreach ($clinic->files as $key => $file) {
                $oldClinic->editImage($file, $key);
            }
        }

        return $this->getByUser($clinic->user);
    }
}
