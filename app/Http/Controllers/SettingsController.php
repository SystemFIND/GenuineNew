<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
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
        $settings = Auth::user()->setting;
        return Inertia::render('Settings/Index', [
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
        $settings = Auth::user()->setting;

        return inertia('Settings', [
            'settings' => $settings
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $data = $request->validate([
            'pushNotifications' => 'required|boolean',
            'darkMode' => 'required|boolean',
            'timezone' => 'required|string',
            'dateFormat' => 'required|string',
            'timeFormat' => 'required|string',
            'language' => 'required|string|in:en,id,fr',
        ]);

        Auth::user()->setting()->updateOrCreate(
            ['user_id' => Auth::id()],
            [
                'push_notifications' => $data['pushNotifications'],
                'dark_mode' => $data['darkMode'],
                'timezone' => $data['timezone'],
                'date_format' => $data['dateFormat'],
                'time_format' => $data['timeFormat'],
                'language' => $data['language'],
            ]
        );

        return redirect()->back()->with('success', 'Settings updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserSetting $userSetting)
    {
        //
    }
}
