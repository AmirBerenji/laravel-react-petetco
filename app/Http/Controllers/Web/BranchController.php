<?php

namespace App\Http\Controllers\Web;

use App\DTO\BranchDto;
use App\DTO\BranchUpdateDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\Branch\BranchStoreRequest;
use App\Http\Requests\Branch\BranchUpdateRequest;
use App\Models\Branch;
use App\Models\Clinic;
use App\Services\BranchService;
use App\Services\ClinicService;
use Illuminate\Routing\Controllers\HasMiddleware;
use Inertia\Inertia;

class BranchController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            'auth',
        ];
    }

    public function __construct(protected BranchService $branchService, protected ClinicService $clinicService) {}

    public function create(Clinic $clinic)
    {
        return Inertia::render('Branch/Create', ['clinic' => $clinic]);
    }

    public function store(BranchStoreRequest $request, Clinic $clinic)
    {

        $branchDto = BranchDto::from([
            'clinic' => $clinic,
            ...$request->validated(),
        ]);

        $this->branchService->addBranch($branchDto);

        return to_route('clinic.index')->with('success', __('created_branch'));
    }

    public function show(Clinic $clinic, Branch $branch)
    {
        //
    }

    public function edit(Clinic $clinic, Branch $branch)
    {
        return Inertia::render('Branch/Edit', [
            'clinic' => $clinic,
            'branch' => $branch]);
    }

    public function update(BranchUpdateRequest $request, clinic $clinic, Branch $branch)
    {

        $branchDto = BranchUpdateDto::from([
            'clinic' => $clinic,
            ...$request->validated(),
        ]);

        $this->branchService->updateBranch($branchDto, $branch);

        return to_route('clinic.index')->with('success', __('updated_branch'));
    }

    public function destroy(Clinic $clinic, Branch $branch)
    {
        $this->branchService->deleteBranch($branch);

        return to_route('clinic.index')->with('success', 'Branch deleted successfully');
    }
}
