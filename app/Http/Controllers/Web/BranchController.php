<?php

namespace App\Http\Controllers\Web;

use App\DTO\BranchDto;
use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\Clinic;
use App\Services\BranchService;
use App\Services\ClinicService;
use Illuminate\Http\Request;
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

    public function store(BranchDto $branchDto, Clinic $clinic)
    {
        $this->branchService->addBranch($branchDto);

        return to_route('clinic.index')->with('success', __('created_branch'));
    }

    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(Branch $branch)
    {
        $this->branchService->deleteBranch($branch);

        return to_route('clinic.index')->with('success', 'Branch deleted successfully');
    }
}
