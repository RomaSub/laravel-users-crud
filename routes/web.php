<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', [UserController::class, 'index']);
Route::resource('users', UserController::class);

Route::post('users/{user}/ban', [UserController::class, 'ban']) -> name('users.ban');
Route::post('users/{user}/unban', [UserController::class, 'unBan'])->name('users.unBan');
