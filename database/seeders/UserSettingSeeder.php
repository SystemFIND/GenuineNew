<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        foreach ($users as $user) {
            // Cek jika user belum punya setting
            if (!$user->setting) {
                UserSetting::create([
                    'user_id' => $user->id,
                    'dark_mode' => false,
                    'timezone' => 'Asia/Jakarta',
                    'date_format' => 'Y-m-d',
                    'time_format' => 'H:i',
                    'push_notifications' => true,
                ]);
            }
        }
    }
}
