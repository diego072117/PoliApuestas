<?php

use App\Http\Controllers\ParticipantesRifa\ParticipantesRifaController;
use App\Http\Controllers\Rifa\RifaController;
use App\Http\Controllers\Transaccion\TransaccionController;
use App\Http\Controllers\Usuario\Usuariocontroller;
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
    Route::put('/UpdateUser/{id}', 'updateUser');
});

Route::group(['prefix' => 'Transaccion', 'controller' => TransaccionController::class], function () {
    Route::post('/{id_usuario}', 'createTransaccion');
    Route::get('/SaldoUsuario/{id_usuario}', 'obtenerTransaccionPorIdUsuario');
});

Route::group(['prefix' => 'Rifa', 'controller' => RifaController::class], function () {
    Route::post('/CreateRifa', 'createRifa');
    Route::get('/GetAllRifas', 'getAllRifas');
    Route::get('/GetRifa/{id}', 'getRifaById');
    Route::get('/GetBoletasDisponibles/{idRifa}', 'getBoletasDisponibles');
    Route::post('/SeleccionarGanadores/{idRifa}', 'seleccionarGanadores');
    Route::get('/GetAllRifasUsuarioCreador/{id}', 'listarRifasUsuarioCreador');

});

Route::group(['prefix' => 'Participantes', 'controller' => ParticipantesRifaController::class], function () {
    Route::post('/CreateParticipante', 'newParticipante');
    Route::get('/InfoParticipantes/{id}', 'getParticipantesPorRifa');
    Route::get('/HistorialUsurio/{id}', 'getHistorialParticipante');
});
