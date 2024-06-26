<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', [UserController::class, 'index']);
Route::resource('users', UserController::class)->except('index');

Route::post('users/{user}/ban', [UserController::class, 'ban'])->name('users.ban');
Route::post('users/{user}/activate', [UserController::class, 'activate'])->name('users.activate');
