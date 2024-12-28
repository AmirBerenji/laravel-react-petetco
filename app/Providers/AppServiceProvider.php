<?php

namespace App\Providers;

use App\DTO\ClinicBranchAddDto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        if ($this->app->isLocal()) {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }
    }

    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        $this->app->bind(ClinicBranchAddDto::class, function ($app) {
            $request = $app->make(Request::class);

            return new ClinicBranchAddDto(
                name: $request->input('name'),
                address: $request->input('address'),
                phone: $request->input('phone'),
                email: $request->input('email'),
                user: $request->user()
            );
        });

    }
}
