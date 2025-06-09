<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Menampilkan halaman edit profil.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile', [
            'user' => $request->user(),
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail
                && ! $request->user()->hasVerifiedEmail(),
            'status' => session('status'),
        ]);
    }

    /**
     * Memperbarui profil pengguna.
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'first_name'    => 'required|string|max:255',
            'last_name'     => 'nullable|string|max:255',
            'email'         => 'required|email|max:255',
            'bio'           => 'nullable|string|max:500',
            'gender'        => 'nullable|in:male,female,other',
            'birth_date'    => 'nullable|date',
            'phone_number'  => 'nullable|string|max:20',
            'city'          => 'nullable|string|max:255',
            'state'         => 'nullable|string|max:255',
            'avatar'        => 'nullable|image|max:2048',
        ]);

        $user = $request->user();

        // Jika ada avatar baru
        if ($request->hasFile('avatar')) {
            $validated['avatar'] = $request->file('avatar')->store('avatars', 'public');
        }

        // Reset verifikasi email jika email berubah
        if ($user->email !== $validated['email']) {
            $user->email_verified_at = null;
        }

        $user->update($validated);

        return redirect()->route('profile.edit')->with('success', 'Profil berhasil diperbarui.');
    }

    /**
     * Update password pengguna.
     */
    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user = $request->user();

        $user->update([
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('profile.edit')->with('success', 'Password berhasil diubah.');
    }

    /**
     * Kirim ulang email verifikasi.
     */
    public function sendVerification(Request $request)
    {
        if ($request->user() instanceof MustVerifyEmail && ! $request->user()->hasVerifiedEmail()) {
            $request->user()->sendEmailVerificationNotification();
        }

        return back()->with('success', 'Email verifikasi berhasil dikirim ulang.');
    }
}
