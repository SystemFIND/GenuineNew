<?php

namespace App\Http\Controllers;

use App\Models\UserSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $settings = $user->setting;

        return inertia('Settings/Index', [
            'settings' => $settings,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserSetting $userSetting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserSetting $userSetting)
    {
        $settings = Auth::user()->settings;
        return inertia('Settings/Edit', [
            'settings' => $settings
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserSetting $userSetting)
    {
       $validated = $request->validate([
            'dark_mode' => 'boolean',
            'timezone' => 'string',
            'date_format' => 'string',
            'time_format' => 'string',
            'push_notification' => 'boolean',
        ]);

        $setting = Auth::user()->settings;
        $setting->update($validated);

        return redirect()->back()->with('success', 'Settings updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserSetting $userSetting)
    {
        //
    }
}
