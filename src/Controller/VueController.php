<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class VueController
{
    public function __construct(
        private readonly Environment $twig,
    ) {
    }

    public function __invoke(): Response
    {
        return new Response($this->twig->render('base.html.twig'));
    }
}
