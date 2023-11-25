<?php

namespace App\Http\Controllers\ParticipanteApuesta;

use App\Http\Controllers\Controller;
use App\Http\Requests\ParticipanteApuesta\CreateParticipanteApuesta;
use App\Models\Apuesta\Apuesta;
use App\Models\ParticipanteApuesta\ParticipanteApuesta;
use App\Models\Usuarios\Usuario;

class ParticipanteApuestaController extends Controller
{
    public function newParticipanteApuesta(CreateParticipanteApuesta $request)
    {

        $usuario = Usuario::findOrFail($request->id_usuario);

        if ($usuario->transaccion && $usuario->transaccion->monto_transaccion) {
            $montoTransaccion = $usuario->transaccion->monto_transaccion;
        } else {
            return response()->json(['mensaje' => 'Recarga tu cuenta para realizar una apuesta'], 403);
        }

        $apuesta = Apuesta::findOrFail($request->id_apuesta);
        $costoApuesta = $apuesta->monto;

        if ($montoTransaccion >= $costoApuesta) {
            // Calcular el nuevo valor del campo monto_transaccion
            $nuevoMontoTransaccion = $montoTransaccion - $costoApuesta;

            // Actualizar el campo monto_transaccion en la tabla transaccion
            $usuario->transaccion->update(['monto_transaccion' => $nuevoMontoTransaccion]);


            // Crear el participante en la apuesta
            $participante = $request->all();
            ParticipanteApuesta::create($participante);

            return response()->json(['mensaje' => 'Tu apuesta fue realizada exitosamente']);
        } else {
            return response()->json([
                'mensaje' => 'No cumples con los requisitos minimos o maximos de la apuesta',
                'error' => 'Requisitos de la apuesta incumplidos',
            ], 403);
        }
    }

    public function getParticipantesPorApuesta($idApuesta)
    {
        // Buscar participantes de la apuesta
        $participantes = ParticipanteApuesta::where('id_apuesta', $idApuesta)->get();

        foreach ($participantes as $participante) {
            $idUsuarioParticipante = $participante->id_usuario;

            // Buscar el usuario por su ID
            $usuarioParticipante = Usuario::find($idUsuarioParticipante);

            // Agregar la información del usuario participante a la apuesta
            $participante->usuarioParticipante = $usuarioParticipante;
        }

        return response()->json($participantes, 200);
    }

    public function getHistorialApuestasParticipante($id_usuario)
    {
        $participaciones = ParticipanteApuesta::where('id_usuario', $id_usuario)->get();
        $historial = [];

        foreach ($participaciones as $participacion) {
            $idApuesta = $participacion->id_apuesta;

            // Verificar si la apuesta ya está en el historial
            $apuestaEnHistorial = array_filter($historial, function ($item) use ($idApuesta) {
                return $item['historialApuesta']['id'] == $idApuesta;
            });

            if (empty($apuestaEnHistorial)) {
                $apuesta = Apuesta::find($idApuesta);

                $usuarioCreador = Usuario::find($apuesta->id_usuarioCreador);

                $historial[] = [
                    'id_usuario' => $id_usuario,
                    'id_apuesta' => $idApuesta,
                    'historialApuesta' => Apuesta::find($idApuesta),
                    'usuarioCreador' => $usuarioCreador,
                ];
            }
        }

        return response()->json($historial, 200);
    }
}
