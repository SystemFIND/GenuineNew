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
        'last_name'         => 'User',
        'email'             => 'admin@GenuineNews.com',
        'email_verified_at' => now(),
        'password'          => Hash::make('adminadmin'), // password
        'role'              => 'admin',
        'avatar'            => null,
        'bio'               => 'Administrator account',
        'gender'            => 'male',
        'Birth_date'        => '1990-01-01',
        'phone_number'      => '08123456789',
        'city'              => 'Jakarta',
        'state'             => 'DKI Jakarta',
        'remember_token'    => \Illuminate\Support\Str::random(10),
    ]);

        User::factory()->count(10)->create([
            'role' => 'user', // Default role for seeded users
        ]);
    }
}
