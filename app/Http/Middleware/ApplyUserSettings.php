<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class ApplyUserSettings
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($user = Auth::user()) {

            if (!$user->setting) {
                $user->setting()->create([
                    'dark_mode' => false,
                    'timezone' => 'Asia/Jakarta',
                    'date_format' => 'Y-m-d',
                    'time_format' => 'H:i',
                    'push_notification' => true,
                ]);
            }

            if ($settings = $user->setting) { // Relasi: hasOne
                if ($settings->timezone) {
                    config(['app.timezone' => $settings->timezone]);
                    date_default_timezone_set($settings->timezone);
                }
            }
        }

        return $next($request);
    }
}
