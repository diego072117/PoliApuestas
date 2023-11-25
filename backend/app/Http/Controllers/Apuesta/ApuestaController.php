<?php

namespace App\Http\Controllers\Apuesta;

use App\Http\Controllers\Controller;
use App\Http\Requests\Apuesta\CreateApuesta;
use App\Models\Apuesta\Apuesta;
use App\Models\ParticipanteApuesta\ParticipanteApuesta;
use App\Models\Transaccion\Transaccion;
use App\Models\Usuarios\Usuario;
use Illuminate\Http\Request;

class ApuestaController extends Controller
{
    public function newApuesta(CreateApuesta $request)
    {
        // Validar la request y obtener los datos validados
        $validatedData = $request->validated();

        // Crear la apuesta con los datos validados
        Apuesta::create($validatedData);

        // Puedes realizar otras acciones si es necesario

        // Retornar una respuesta JSON
        return response()->json(['message' => 'Apuesta registrada con éxito'], 201);
    }

    public function getAllApuestas()
    {
        // Obtener todas las apuestas activas
        $apuestas = Apuesta::where('estado', 'activa')->get();

        // Iterar sobre cada apuesta y obtener la información del usuario creador
        foreach ($apuestas as $apuesta) {
            $idUsuarioCreador = $apuesta->id_usuarioCreador;

            // Buscar el usuario por su ID
            $usuarioCreador = Usuario::find($idUsuarioCreador);

            // Agregar la información del usuario creador a la apuesta
            $apuesta->usuarioCreador = $usuarioCreador;
        }

        return response()->json($apuestas, 200);
    }

    public function getApuestaById($id)
    {
        $apuesta = Apuesta::find($id);

        if ($apuesta) {
            $idUsuarioCreador = $apuesta->id_usuarioCreador;

            $usuarioCreador = Usuario::find($idUsuarioCreador);

            $apuesta->usuarioCreador = $usuarioCreador;
            return response()->json($apuesta, 200);
        } else {
            return response()->json(['message' => 'Apuesta no encontrada'], 404);
        }
    }

    public function listarApuestasUsuarioCreador($id_usuario)
    {
        // Buscar todas las apuestas donde el id_usuarioCreador sea igual al ID del usuario autenticado
        $apuestas = Apuesta::where('id_usuarioCreador', $id_usuario)->get();

        // Retorna las apuestas encontradas
        return response()->json($apuestas, 200);
    }


    public function seleccionarGanadoresApuesta(Request $request)
    {
        // Validación si es necesario

        $idApuesta = $request->input('id_apuesta');
        $equipoGanador = $request->input('equipoGanador');

        $apuesta = Apuesta::find($idApuesta);

        if (!$apuesta) {
            return response()->json(['mensaje' => 'Apuesta no encontrada'], 404);
        }

        if ($apuesta->equipoGanador) {
            return response()->json(['mensaje' => 'Ya se seleccionó un ganador para esta apuesta'], 400);
        }

        // Obtén todos los participantes de la apuesta
        $participantes = ParticipanteApuesta::where('id_apuesta', $idApuesta)->get();
        if ($participantes->count() < 2) {
            return response()->json(['mensaje' => 'Debe haber al menos dos participantes'], 400);
        }
        if (count($participantes->pluck('equipoApostado')->unique()) < 2) {
            return response()->json(['mensaje' => 'Debe haber al menos un equipo diferente para realizar esta acción'], 400);
        }

        // Actualiza el campo equipoGanador en la tabla apuestas
        $apuesta->update(['equipoGanador' => $equipoGanador]);

        // Calcula el total recaudado
        $totalRecaudado = $participantes->count() * $apuesta->monto;

        // Inicializa el total de ganancias
        $totalGananciasParticipantes = 0;

        $ganadores = $participantes->where('equipoApostado', $equipoGanador);

        // Calcula el porcentaje de ganancias para los ganadores
        $porcentajeGanancias = number_format(100 / ($ganadores->count() + 1), 1);
        foreach ($participantes as $participante) {
            // Compara el equipoGanador de la apuesta con el equipoApostado del participante
            if ($equipoGanador === $participante->equipoApostado) {
                // Calcula las ganancias
                $ganancias = $apuesta->monto + ($apuesta->monto * ($porcentajeGanancias / 100));

                $totalGananciasParticipantes += $ganancias;

                // Accede al usuario y actualiza su transacción con las ganancias
                $usuario = Usuario::find($participante->id_usuario);
                $usuario->transaccion->update(['monto_transaccion' => $usuario->transaccion->monto_transaccion + $ganancias]);
            }
        }


        // Accede al usuario organizador y actualiza su transacción con las ganancias
        $usuarioOrganizador = Usuario::find($apuesta->id_usuarioCreador);

        $gananciasOrganizador = $totalRecaudado - $totalGananciasParticipantes;
        if ($usuarioOrganizador->transaccion) {
            $usuarioOrganizador->transaccion->update(['monto_transaccion' => $usuarioOrganizador->transaccion->monto_transaccion + $gananciasOrganizador]);
        } else {
            Transaccion::create(['id_usuario' => $usuarioOrganizador->id, 'monto_transaccion' => $gananciasOrganizador]);
        }

        $apuesta->update(['estado' => 'finalizada']);

        return response()->json(['mensaje' => 'Ganadores seleccionados exitosamente']);
    }
}
