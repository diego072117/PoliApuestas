<?php

namespace App\Http\Controllers\ParticipantesRifa;

use App\Http\Controllers\Controller;
use App\Http\Requests\ParticipantesRifa\ParticipantesRifa;
use App\Models\ParticipanteRifa\Participanterifa;
use App\Models\Rifas\Rifas;
use App\Models\Usuarios\Usuario;
use Illuminate\Http\Request;

class ParticipantesRifaController extends Controller
{
    public function newParticipante(ParticipantesRifa $request)
    {

        $usuario = Usuario::findOrFail($request->id_usuario);

        $montoTransaccion = $usuario->transaccion->monto_transaccion;

        $rifa = Rifas::findOrFail($request->id_rifa);

        $costoBoleta = $rifa->valorBoleta;

        if ($montoTransaccion >= $costoBoleta) {

            // Calcula el nuevo valor del campo monto_transaccion
            $nuevoMontoTransaccion = $montoTransaccion - $costoBoleta;

            // Actualiza el campo monto_transaccion en la tabla transaccion
            $usuario->transaccion->update(['monto_transaccion' => $nuevoMontoTransaccion]);

            // Crea el participante de rifa
            $participante = $request->all();
            Participanterifa::create($participante);

            return response()->json(['mensaje' => 'Tu compra fue realizada exitosamente']);
        } else {
            $saldoActual = $usuario->transaccion->monto_transaccion;

            return response()->json([
                'mensaje' => 'Saldo insuficiente',
                'error' => 'No tienes suficiente saldo para comprar la boleta',
                'saldo_actual' => $saldoActual,
                'costo_boleta' => $costoBoleta,
            ], 403); 
        }
    }
}
