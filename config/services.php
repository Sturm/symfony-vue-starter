<?php

declare(strict_types=1);

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $services = $containerConfigurator->services();

    $services->defaults()
        ->autowire()
        ->autoconfigure();

    $services->load('App\\', __DIR__ . '/../src/')
        ->exclude([
        __DIR__ . '/../src/DependencyInjection/',
        __DIR__ . '/../src/Entity/',
        __DIR__ . '/../src/Kernel.php',
    ]);

    $services->load('App\Controller\\', __DIR__ . '/../src/Controller/**/*Controller.php')
        ->tag('controller.service_arguments');

    $services->load('App\User\Controller\\', __DIR__ . '/../src/User/Controller')
        ->tag('controller.service_arguments');
};
