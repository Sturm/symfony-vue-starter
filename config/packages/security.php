<?php

declare(strict_types=1);

use App\User\Entity\User;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->extension('security', [
        'password_hashers' => [
            PasswordAuthenticatedUserInterface::class => 'auto',
        ],
        'providers' => [
            'app_user_provider' => [
                'entity' => [
                    'class' => User::class,
                    'property' => 'email',
                ],
            ],
        ],
        'firewalls' => [
            'dev' => [
                'pattern' => '^/(_(profiler|wdt)|css|images|js)/',
                'security' => false,
            ],
            'login' => [
                'pattern' => '^/api/login',
                'stateless' => true,
                'json_login' => [
                    'check_path' => '/api/login',
                    'success_handler' => 'lexik_jwt_authentication.handler.authentication_success',
                    'failure_handler' => 'lexik_jwt_authentication.handler.authentication_failure',
                ],
            ],
            'api' => [
                'pattern' => '^/api',
                'stateless' => true,
                'jwt' => null,
            ],
            'main' => [
                'lazy' => true,
                'provider' => 'app_user_provider',
            ],
        ],
        'access_control' => [
            [
                'path' => '^/api/login',
                'roles' => 'PUBLIC_ACCESS',
            ],
            [
                'path' => '^/api',
                'roles' => 'IS_AUTHENTICATED_FULLY',
            ],
        ],
    ]);
    if ($containerConfigurator->env() === 'test') {
        $containerConfigurator->extension('security', [
            'password_hashers' => [
                PasswordAuthenticatedUserInterface::class => [
                    'algorithm' => 'auto',
                    'cost' => 4,
                    'time_cost' => 3,
                    'memory_cost' => 10,
                ],
            ],
        ]);
    }
};
