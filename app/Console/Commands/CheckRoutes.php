<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Route;

class CheckRoutes extends Command
{
    protected $signature = 'check:routes';
    protected $description = 'Check if essential routes are configured properly';

    public function handle()
    {
        $this->info('🔍 Checking routes...');

        // Daftar routes yang ingin dicek
        $requiredRoutes = [
            'login' => ['uri' => '/login', 'methods' => ['GET']],
            'register' => ['uri' => '/register', 'methods' => ['GET']],
            'google.redirect' => ['uri' => '/auth/google/redirect', 'methods' => ['GET']],
            'google.callback' => ['uri' => '/auth/google/callback', 'methods' => ['GET']],
            'dashboard' => ['uri' => '/dashboard', 'methods' => ['GET']],
            'profile.edit' => ['uri' => '/profile', 'methods' => ['GET']],
            'admin.dashboard' => ['uri' => '/admin/dashboard', 'methods' => ['GET']],
            'journalist.dashboard' => ['uri' => '/journalist/dashboard', 'methods' => ['GET']],
        ];

        foreach ($requiredRoutes as $name => $details) {
            $route = Route::getRoutes()->getByName($name);
            if ($route) {
                $this->info("✅ Route '{$name}' found: [{$route->uri()}]");

                // Cek metode HTTP
                if (!empty($details['methods'])) {
                    $methods = $route->methods();
                    $expected = $details['methods'];
                    $intersect = array_intersect($expected, $methods);
                    if (count($intersect) === count($expected)) {
                        $this->info("   ✅ Methods OK: " . implode(', ', $methods));
                    } else {
                        $this->error("   ❌ Methods mismatch: Expected " . implode(', ', $expected) . ", Found " . implode(', ', $methods));
                    }
                }
            } else {
                $this->error("❌ Route '{$name}' NOT FOUND.");
            }
        }

        $this->info('🎉 Route check complete!');
    }
}
