<?php

namespace App\Services\Tokens;

use Laravel\Passport\Bridge\AccessToken;

class CustomAccessToken extends AccessToken
{
    use CustomClaimsAccessTokenTrait;
}