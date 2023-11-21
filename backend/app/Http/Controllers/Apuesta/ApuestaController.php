<?php

namespace App\Http\Controllers\Apuesta;

use App\Http\Controllers\Controller;
use App\Http\Requests\Apuesta\CreateApuesta;
use App\Models\Apuesta\Apuesta;
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

    public function seleccionarGanadoresApuesta($idApuesta)
    {
        
    }
}
