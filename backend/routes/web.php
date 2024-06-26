<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/greeting/{locale}', function (string $locale) {
    if (!in_array($locale, config('app.locales'))) {
        $locale = config('app.fallback_locale');
    }
    $cookie = cookie('locale', $locale, 60 * 24 * 30);
    app()->setLocale($locale);
    return response()->json(['success' => true])->withCookie($cookie);
});

require __DIR__ . '/auth.php';
