<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        \App\Models\User::create([
        'first_name'        => 'Admin',
        'last_name'         => 'Ganteng',
        'email'             => 'admin@GenuineNews.com',
        'email_verified_at' => now(),
        'password'          => Hash::make('adminadmin'), // password
        'role'              => 'admin',
        'avatar'            => null,
        'bio'               => 'Administrator Account',
        'gender'            => 'male',
        'Birth_date'        => '1990-01-01',
        'phone_number'      => '08123456789',
        'city'              => 'Jakarta',
        'state'             => 'DKI Jakarta',
        'remember_token'    => \Illuminate\Support\Str::random(10),
    ]);

    // Journalist account
        User::create([
            'first_name'        => 'Jurnalis',
            'last_name'         => 'Hebat',
            'email'             => 'journalist@GenuineNews.com',
            'email_verified_at' => now(),
            'password'          => Hash::make('journalist123'),
            'role'              => 'journalist',
            'avatar'            => null,
            'bio'               => 'Jurnalis Profesional',
            'gender'            => 'female',
            'Birth_date'        => '1995-05-15',
            'phone_number'      => '08129876543',
            'city'              => 'Bandung',
            'state'             => 'Jawa Barat',
            'remember_token'    => \Illuminate\Support\Str::random(10),
        ]);

        User::factory()->count(10)->create([
            'role' => 'user', // Default role for seeded users
        ]);
    }
}
