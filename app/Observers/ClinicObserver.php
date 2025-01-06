<?php

namespace App\Observers;

use App\Models\Branch;
use App\Models\Clinic;

class ClinicObserver
{
    public function deleted(Clinic $clinic): void
    {
        $clinic->branches->each(fn (Branch $branch) => $branch->delete());
    }
}
