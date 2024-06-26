<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Localization
{
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->cookie('locale') ?? config('app.locale');
        app()->setLocale($locale);
        return $next($request);
    }
}
