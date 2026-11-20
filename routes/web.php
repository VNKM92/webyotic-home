<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('landing');
});

Route::post('/api/contact', [ContactController::class, 'store']);
Route::get('/health', [ContactController::class, 'health']);
