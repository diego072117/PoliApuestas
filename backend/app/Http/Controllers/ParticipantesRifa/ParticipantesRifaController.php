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


        if ($usuario->transaccion && $usuario->transaccion->monto_transaccion) {
            $montoTransaccion = $usuario->transaccion->monto_transaccion;
        } else {
            return response()->json(['mensaje' => 'Recarga tu cuenta para participar en la rifa'], 403);
        }

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
    public function getParticipantesPorRifa($idRifa)
    {
        // Buscar participantes de la rifa
        $participantes = Participanterifa::where('id_rifa', $idRifa)->get();

        foreach ($participantes as $participante) {
            $idUsuarioParticipante = $participante->id_usuario;

            // Buscar el usuario por su ID
            $usuarioParticipante = Usuario::find($idUsuarioParticipante);

            // Agregar la información del usuario creador a la rifa
            $participante->usuarioParticipante = $usuarioParticipante;
        }

        return response()->json($participantes, 200);
    }
}
