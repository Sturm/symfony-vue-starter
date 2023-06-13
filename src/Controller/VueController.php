<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class VueController
{
    public function __construct(
        private readonly Environment $twig,
    ) {
    }

    #[Route(
        '/{vueRoute?}',
        requirements: [
            "vueRoute" => "^(?!api).+"
        ],
    )]
    public function vueView(): Response
    {
        return new Response($this->twig->render('base.html.twig'));
    }
}
