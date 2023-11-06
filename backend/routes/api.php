<?php

use App\Http\Controllers\Transaccion\TransaccionController;
use App\Http\Controllers\Usuario\Usuariocontroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'Users', 'controller' => Usuariocontroller::class], function () {
    Route::post('/CreateUser', 'createUser');
    Route::get('/GetAllUsers', 'getAllUsers');
    Route::get('/GetUser/{id}', 'getUserById');
    Route::post('/Login', 'loginUser');
});

Route::group(['prefix' => 'Transaccion', 'controller' => TransaccionController::class], function () {
    Route::post('/New/{id_usuario}', 'createTransaccion');
});
