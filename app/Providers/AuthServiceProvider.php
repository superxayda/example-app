<?php

namespace App\Providers;

use App\CustomAuth\CustomUserProvider;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;

class AuthServiceProvider extends ServiceProvider
{
    // handle declare new driver for authentication
    public function register()
    {
        //
    }

    public function boot()
    {
        
        Auth::provider('custom_auth', function ($app, array $config) {
            return new CustomUserProvider($app['hash'], $config['model']);
        });
    }
}
