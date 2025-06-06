<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [NewsController::class, 'index']);

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/login', function () {
    return Inertia::render('Loginpage');
})->name('login')->middleware('guest');

Route::get('/register', function () {
    return Inertia::render('Registerpage');
})->name('register')->middleware('guest');

//Route HomePage
Route::inertia('/tentang-kami', 'TentangKami');
Route::inertia('/kontak', 'Kontak');
Route::inertia('/privasi', 'Privasi');
Route::inertia('/ketentuan', 'Ketentuan');

// Route to Feedback page
Route::inertia('/feedback', 'Feedback');

Route::get('/admin/dashboard', function () {
    return Inertia::render('AdminDashboard');
})->middleware(['auth', 'admin'])->name('admin.dashboard');

Route::get('/journalist/dashboard', function () {
    return Inertia::render('JournalistDashboard');
})->middleware(['auth', 'journalist'])->name('journalist.dashboard');

Route::get('/auth/google/redirect', [GoogleController::class, 'redirect'])->name('google.redirect');
Route::get('/auth/google/callback', [GoogleController::class, 'callback'])->name('google.callback');

// Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
//     Route::get('/users', [UserController::class, 'index'])->name('users.index');
//     Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
//     Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
//     Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
//     Route::get('/dashboard', function () {
//         return Inertia::render('AdminDashboard');
//     })->name('dashboard');
// });

// Route::get('/admin/dashboard', function () {
//     return Inertia::render('AdminDashboard', [
//         'users' => \App\Models\User::all(),
//     ]);
// })->name('dashboard');

// Dashboard breeze
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
