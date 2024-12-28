<?php

namespace App\Interfaces;

use App\DTO\ClinicBranchAddDto;
use App\Models\Clinic;
use App\Models\User;
use Illuminate\Support\Collection;

interface IClinicRepository
{
    public function getByUser(User $user): Collection;

    public function addClinic(ClinicBranchAddDto $clinic): Clinic;
}
