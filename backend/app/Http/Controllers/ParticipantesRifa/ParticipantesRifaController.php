<?php

namespace App\Http\Controllers\ParticipantesRifa;

use App\Http\Controllers\Controller;
use App\Http\Requests\ParticipantesRifa\ParticipantesRifa;
use App\Models\ParticipanteRifa\Participanterifa;
use App\Models\Usuarios\Usuario;
use Illuminate\Http\Request;

class ParticipantesRifaController extends Controller
{
    public function consultarSaldoUsuario($idUsuario)
    {

        $usuario = Usuario::findOrFail($idUsuario);
        
        $montoTransaccion = $usuario->transaccion->monto_transaccion;

        return $montoTransaccion;
    }

    public function newParticipante(ParticipantesRifa $request)
    {
        $participante = $request->all();
        Participanterifa::create($participante);

        return response()->json(['mensaje' => 'Participante registrado con éxito']);
    }
}
