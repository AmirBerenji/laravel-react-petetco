<?php

namespace App\Http\Controllers\Web;

use App\DTO\ClinicBranchAddDto;
use App\DTO\ClinicEditDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\Clinic\ClinicStoreRequest;
use App\Http\Requests\Clinic\ClinicUpdateRequest;
use App\Models\Clinic;
use App\Services\ClinicService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Inertia\Inertia;
use Inertia\Response;

class ClinicController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            'auth',
        ];
    }

    public function __construct(protected ClinicService $clinicService)
    {
    }

    public function index(Request $request)
    {
        $clinicDto = $this->clinicService->getByUser($request->user());

        if ($clinicDto->count() === 0) {
            return to_route('clinic.create');
        }

        return Inertia::render('Clinic/Index', [
            'clinics' => $clinicDto,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Clinic/Create');
    }

    public function store(ClinicStoreRequest $request): RedirectResponse
    {
        $dto = ClinicBranchAddDto::from([
            'user' => $request->user(),
            'files' => $request->allFiles(),
            ...$request->validated()
        ]);

        $this->clinicService->addClinic($dto);

        return to_route('clinic.index')->with('success', __('created_clinic'));
    }

    public function update(ClinicUpdateRequest $request)
    {
        $dto = ClinicEditDto::from(array_merge($request->validated(), ['user' => $request->user(), 'files' => $request->allFiles()]));

        $this->clinicService->editClinic($dto);

        return to_route('clinic.index')->with('success', __('updated_clinic'));
    }

    public function destroy(Clinic $clinic)
    {
        $clinic->delete();

        return to_route('clinic.index')->with('success', __('deleted_clinic'));
    }
}
