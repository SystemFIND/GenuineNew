<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),

            'auth' => [
                'user' => $request->user() ? array_merge(
                    $request->user()->toArray(),
                    [
                        'name' => trim($request->user()->first_name . ' ' . $request->user()->last_name),
                        'dark_mode' => optional($request->user()->setting)->dark_mode ?? false, // ✅ Tambahkan ini
                    ]
                ) : null,
            ],

            // Pastikan settings itu sebuah array, kalau null kasih array kosong
            'settings' => $request->user() && $request->user()->setting
                ? $request->user()->setting->toArray()
                : ['dark_mode' => false],  // default false kalau belum ada

            'csrf_token' => csrf_token(),

            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],

            // ✅ Flash message support
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error'   => fn () => $request->session()->get('error'),
            ],
        ];
    }
}
