<?php

namespace App\Http\Controllers;

use App\DTO\ClinicBranchAddDto;
use App\DTO\ClinicEditDto;
use App\Http\Requests\Clinic\ClinicStoreRequest;
use App\Http\Requests\Clinic\ClinicUpdateRequest;
use App\Services\ClinicService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Inertia\Inertia;

class ClinicController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            'auth',
        ];
    }

    public function __construct(protected ClinicService $clinicService) {}

    public function index(Request $request)
    {
        $clinicDto = $this->clinicService->getByUser($request->user());

        if ($clinicDto->count() > 0) {
            return Inertia::render('Clinic/Index', [
                'clinics' => $clinicDto,
            ]);
        }

        return Inertia::render('Clinic/Create');
    }

    public function create()
    {
        return Inertia::render('Clinic/Create');
    }

    public function store(ClinicStoreRequest $request)
    {

        $dto = ClinicBranchAddDto::from(array_merge($request->validated(), ['user' => $request->user(), 'files' => $request->allFiles()]));
        $clinicDto = $this->clinicService->addClinic($dto);

        return Inertia::render('Clinic/Index', [
            'clinics' => $clinicDto,
        ])->with('success', 'Clinic added successfully.');
    }

    //
    //    public function show(string $id)
    //    {
    //        //
    //    }
    //
    //    public function edit(string $id)
    //    {
    //        //
    //    }
    //
    public function update(ClinicUpdateRequest $request)
    {
        $dto = ClinicEditDto::from(array_merge($request->validated(), ['user' => $request->user(), 'files' => $request->allFiles()]));

        $clinicDto = $this->clinicService->editClinic($dto);

        return Inertia::render('Clinic/Index', [
            'clinics' => $clinicDto,
        ])->with('success', 'Clinic edited successfully.');
    }
    //
    //    public function destroy(string $id)
    //    {
    //        //
    //    }
}
