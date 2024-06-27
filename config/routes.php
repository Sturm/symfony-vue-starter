<?php

declare(strict_types=1);

use App\Controller\VueController;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

return static function (RoutingConfigurator $routingConfigurator): void {
    $routingConfigurator->add('api_login_check', '/api/login');

    $routingConfigurator->add('vue_route', '/{vueRoute?}')
        ->controller(VueController::class)
        ->requirements([
        'vueRoute' => '^(?!api).+',
    ]);

    $routingConfigurator->import('../src/User/Controller/', 'attribute');
};
