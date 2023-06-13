<?php

declare(strict_types=1);

namespace App\User\Controller;

use App\Serializer\SerializationGroup;
use App\User\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

class UserController
{
    public function __construct(
        private readonly SerializerInterface $serializer,
    ) {
    }

    #[Route('/api/user', methods: Request::METHOD_GET)]
    public function getUser(#[CurrentUser] ?User $user): Response
    {
        if (null === $user) {
            return new Response(status: Response::HTTP_UNAUTHORIZED);
        }

        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups(SerializationGroup::BASIC)
            ->toArray();

        $json = $this->serializer->serialize(
            $user,
            JsonEncoder::FORMAT,
            $context,
        );

        return new JsonResponse($json, json: true);
    }
}
