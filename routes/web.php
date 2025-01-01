<?php

use App\Enum\RolesEnum;
use App\Http\Controllers\ClinicController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UpvoteController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Web\BranchController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'phpVersion' => PHP_VERSION,
    ]);
});

//Route::redirect('/', '/dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/user', [UserController::class, 'index'])->name('user.index');
    Route::get('/user/{user}/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/user/{user}', [UserController::class, 'update'])->name('user.update');

    Route::middleware(['verified',
        sprintf('role:%s|%s|%s', RolesEnum::User->value, RolesEnum::Admin->value, RolesEnum::Commenter->value)])->group(function () {
            Route::get('/dashboard', function () {
                return Inertia::render('Dashboard');
            })->name('dashboard');

            Route::resource('clinic', ClinicController::class);

            Route::resource('branch', BranchController::class);

            Route::resource('feature', FeatureController::class);

            Route::post('/feature/{feature}/upvote', [UpvoteController::class, 'store'])
                ->name('upvote.store');

            Route::delete('/upvote/{feature}', [UpvoteController::class, 'destroy'])
                ->name('upvote.destroy');

            Route::post('/feature/{feature}/comments', [CommentController::class, 'store'])
                ->name('comment.store');

            Route::delete('/comment/{comment}', [CommentController::class, 'destroy'])
                ->name('comment.destroy');
        });
});

require __DIR__.'/auth.php';
