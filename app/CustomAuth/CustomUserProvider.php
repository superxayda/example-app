<?php

namespace App\CustomAuth;

use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Contracts\Auth\Authenticatable as UserContract;

class CustomUserProvider extends EloquentUserProvider
{
    public function retrieveByCredentials(array $credentials)
    {
        if (isset($credentials['name'])) {
            return $this->createModel()
                        ->newQuery()
                        ->where('name', $credentials['name'])
                        ->first();
        }

        return null;
    }

    public function validateCredentials(UserContract $user, array $credentials)
    {
        $plain = $credentials['password'];

        return $this->hasher->check($plain, $user->getAuthPassword());
    }
}