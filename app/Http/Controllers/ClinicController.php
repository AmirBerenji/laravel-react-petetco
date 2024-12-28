<?php

namespace App\Http\Controllers;

use App\DTO\ClinicBranchAddDto;
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

        return Inertia::render('Clinic/Index', [
            'clinic' => $clinicDto,
        ]);
    }
    //
    //    public function create()
    //    {
    //        //
    //    }
    //

    public function store(ClinicBranchAddDto $request)
    {
        $this->clinicService->addClinic($request);

        return back()->with('success', 'Clinic added successfully.');
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
    //    public function update(Request $request, string $id)
    //    {
    //        //
    //    }
    //
    //    public function destroy(string $id)
    //    {
    //        //
    //    }
}
