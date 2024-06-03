<?php

namespace App\Auth;

use League\OAuth2\Server\Entities\AccessTokenEntityInterface;
use League\OAuth2\Server\ResponseTypes\BearerTokenResponse;

class CustomBearerTokenResponse extends BearerTokenResponse
{
    protected function getExtraParams(AccessTokenEntityInterface $accessToken): array
    {
        return [
            'user_id' => $this->accessToken->getUserIdentifier(),
            'nice' => "Hello",
        ];
    }
}
