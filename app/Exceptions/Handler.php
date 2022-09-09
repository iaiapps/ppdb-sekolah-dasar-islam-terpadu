<?php

namespace App\Exceptions;

use Throwable;
use Inertia\Inertia;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Exception;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    // public function register()
    // {
    //     $this->renderable(function (Exception $e, $request) {
    //         // $response = parent::render($request, $e);
    //         // if (!app()->environment(['local', 'testing']) && in_array($response->status(), [500, 503, 404, 403])) {
    //         return Inertia::render('Error', ['status' => '404'])
    //             ->toResponse($request)
    //             ->setStatusCode('404');
    //         // } else if ($response->status() === 404) {
    //         //     return back()->with([
    //         //         'message' => 'The page expired, please try again.',
    //         //     ]);
    //         // }

    //         // return $response;
    //     });
    // }

    // public function handleException($request, Exception $exception)
    // {
    //     if ($exception instanceof RouteNotFoundException) {
    //         return response('The specified URL cannot be  found.', 404);
    //     }
    // }

    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);

        if (!app()->environment(['local', 'd']) && in_array($response->status(), [500, 503, 404, 403])) {
            return Inertia::render('Error', ['status' => $response->status()])
                ->toResponse($request)
                ->setStatusCode($response->status());
        } else if ($response->status() === 419) {
            return back()->with([
                'message' => 'The page expired, please try again.',
            ]);
        }

        return $response;
    }
}
