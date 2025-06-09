<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\FeedbackController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\NewsController as AdminNewsController;
use App\Http\Controllers\SettingsController;
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

// Route::get('/admin/dashboard', function () {
//     return Inertia::render('AdminDashboard');
// })->middleware(['auth', 'admin'])->name('admin.dashboard');

Route::get('/journalist/dashboard', function () {
    return Inertia::render('JournalistDashboard');
})->middleware(['auth', 'journalist'])->name('journalist.dashboard');

Route::get('/auth/google/redirect', [GoogleController::class, 'redirect'])->name('google.redirect');
Route::get('/auth/google/callback', [GoogleController::class, 'callback'])->name('google.callback');

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
    Route::get('/dashboard', function () {
        return Inertia::render('AdminDashboard', [
            'users' => \App\Models\User::paginate(10, ['*'], 'page_users'),
            'articles' => \App\Models\News::paginate(10, ['*'], 'page_articles'),

        ]);
    })->name('dashboard');

    Route::post('/news', [AdminNewsController::class, 'store'])->name('news.store');
});

// Route::get('/admin/dashboard', function () {
//     return Inertia::render('AdminDashboard', [
//         'users' => \App\Models\User::all(),
//     ]);
// })->middleware(['auth', 'admin'])->name('admin.dashboard');

Route::get('/dashboard', function () {
    return redirect('/');
})->middleware(['auth', 'verified'])->name('dashboard');

// Dashboard breeze
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('');

// Feedback routes backend
Route::post('/feedback', [FeedbackController::class, 'store'])->name('feedback.store');

Route::middleware(['auth', 'verified'])->group(function () {
    // Tampilkan form edit profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    // Update profil dasar
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // Hapus akun
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Update password
    Route::put('/profile/password', [ProfileController::class, 'updatePassword'])->name('profile.password');

    // Kirim ulang verifikasi email
    Route::post('/email/verification-notification', [ProfileController::class, 'sendVerification'])->name('email.sendVerification');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/settings', [SettingsController::class, 'edit'])->name('settings.edit');
    Route::post('/settings', [SettingsController::class, 'update'])->name('settings.update');
});


require __DIR__.'/auth.php';
