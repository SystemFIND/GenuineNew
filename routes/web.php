<?php

use App\Http\Controllers\Admin\FeedbackController;
use App\Http\Controllers\Admin\NewsController as AdminNewsController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// RUTE PUBLIK
Route::get('/', [NewsController::class, 'index'])->name('home');
Route::inertia('/tentang-kami', 'TentangKami')->name('about');
Route::inertia('/kontak', 'Kontak')->name('contact');
Route::inertia('/privasi', 'Privasi')->name('privacy');
Route::inertia('/ketentuan', 'Ketentuan')->name('terms');
Route::inertia('/feedback', 'Feedback')->name('feedback.form');
Route::post('/feedback', [FeedbackController::class, 'store'])->name('feedback.store');

// RUTE UNTUK TAMU (Guest)
Route::middleware('guest')->group(function () {
    Route::get('/login', fn () => Inertia::render('Loginpage'))->name('login');
    Route::get('/register', fn () => Inertia::render('Registerpage'))->name('register');
    Route::get('/auth/google/redirect', [GoogleController::class, 'redirect'])->name('google.redirect');
    Route::get('/auth/google/callback', [GoogleController::class, 'callback'])->name('google.callback');
});

// RUTE YANG MEMBUTUHKAN LOGIN
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn () => redirect()->route('home'))->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('/settings', [SettingsController::class, 'edit'])->name('settings');
    Route::post('/settings', [SettingsController::class, 'update'])->name('settings.update');
});

// GRUP RUTE ADMIN
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('AdminDashboard', [
            'users' => \App\Models\User::paginate(10, ['*'], 'page_users'),
            'articles' => \App\Models\News::latest()->paginate(10, ['*'], 'page_articles'),
        ]);
    })->name('dashboard');

    Route::post('/news', [AdminNewsController::class, 'store'])->name('news.store');
    Route::resource('users', UserController::class)->except(['create', 'show']);
});

// GRUP RUTE JURNALIS
Route::middleware(['auth', 'journalist'])->prefix('journalist')->name('journalist.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('JournalistDashboard', [
            // Menggunakan nama paginator yang sama dengan Admin Dashboard
            'articles' => \App\Models\News::where('author_id', auth()->id())
                          ->latest()
                          ->paginate(10, ['*'], 'page_articles'),
        ]);
    })->name('dashboard');

    // Menggunakan controller yang sama, tetapi dengan nama rute yang berbeda
    Route::post('/news', [AdminNewsController::class, 'store'])->name('news.store');
});

require __DIR__.'/auth.php';