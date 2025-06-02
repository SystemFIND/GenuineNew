<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class CheckMiddleware extends Command
{
    protected $signature = 'check:middleware';
    protected $description = 'Check if Admin and Journalist middleware are properly configured';

    public function handle()
    {
        $middlewarePath = app_path('Http/Middleware');
        $kernelPath = app_path('Http/Kernel.php');

        // Cek file Admin.php
        $this->info('🔍 Checking Admin middleware...');
        if (File::exists("$middlewarePath/Admin.php")) {
            $this->info('✅ Admin.php found.');
            $content = File::get("$middlewarePath/Admin.php");
            if (strpos($content, 'namespace App\Http\Middleware;') !== false &&
                strpos($content, 'class Admin') !== false) {
                $this->info('✅ Namespace and class name OK.');
            } else {
                $this->error('❌ Namespace or class name incorrect in Admin.php.');
            }
        } else {
            $this->error('❌ Admin.php NOT FOUND.');
        }

        // Cek file Journalist.php
        $this->info('🔍 Checking Journalist middleware...');
        if (File::exists("$middlewarePath/Journalist.php")) {
            $this->info('✅ Journalist.php found.');
            $content = File::get("$middlewarePath/Journalist.php");
            if (strpos($content, 'namespace App\Http\Middleware;') !== false &&
                strpos($content, 'class Journalist') !== false) {
                $this->info('✅ Namespace and class name OK.');
            } else {
                $this->error('❌ Namespace or class name incorrect in Journalist.php.');
            }
        } else {
            $this->error('❌ Journalist.php NOT FOUND.');
        }

        // Cek Kernel.php
        $this->info('🔍 Checking Kernel.php registration...');
        $kernelContent = File::get($kernelPath);
        if (strpos($kernelContent, "'admin' => \\App\\Http\\Middleware\\Admin::class") !== false &&
            strpos($kernelContent, "'journalist' => \\App\\Http\\Middleware\\Journalist::class") !== false) {
            $this->info('✅ Kernel.php registrations OK.');
        } else {
            $this->error('❌ Kernel.php registrations missing or incorrect.');
        }

        $this->info('🎉 Check complete!');
    }
}
