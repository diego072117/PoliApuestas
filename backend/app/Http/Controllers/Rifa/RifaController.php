<?php

namespace App\Http\Controllers\Rifa;

use App\Http\Controllers\Controller;
use App\Http\Requests\Rifa\CreateRifa;
use App\Models\ParticipanteRifa\Participanterifa;
use App\Models\Rifas\Rifas;
use Illuminate\Http\Request;

class RifaController extends Controller
{
    public function createRifa(CreateRifa $request)
    {
        $validatedData = $request->validated();

        $rifa = new Rifas($validatedData);

        $rifa->save();
        return response()->json(['message' => 'Rifa creada con éxito'], 201);
    }

    public function getAllRifas()
    {
        $rifas = Rifas::all();

        return response()->json($rifas, 200);
        //return response()->json(['rifas' => $rifas], 200);
    }

    public function getRifaById($id)
    {
        $rifa = Rifas::find($id);

        if ($rifa) {
            return response()->json($rifa, 200);
        } else {
            return response()->json(['message' => 'Rifa no encontrada'], 404);
        }
    }

    public function getBoletasDisponibles($idRifa)
    {
        $rifa = Rifas::find($idRifa);

        if (!$rifa) {
            return response()->json(['error' => 'Rifa no encontrada'], 404);
        }

        $numeroBoletasTotales = $rifa->boletasTotales;

        $boletasCompradas = Participanterifa::where('id_rifa', $idRifa)->pluck('numeroBoleta')->toArray();

        // Calcular los números de boletas disponibles
        $boletasDisponibles = array_values(array_diff(range(1, $numeroBoletasTotales), $boletasCompradas));

        return response()->json($boletasDisponibles, 200);
    }

    public function seleccionarGanadores($idRifa)
    {
        $participantes = Participanterifa::where('id_rifa', $idRifa)->get();

        if ($participantes->count() < 2) {
            return response()->json(['error' => 'No hay suficientes participantes para seleccionar dos ganadores'], 400);
        }

        // Obtener dos números de boleta aleatorios
        $ganador1 = $participantes->random()->numeroBoleta;
        $ganador2 = $participantes->where('numeroBoleta', '!=', $ganador1)->random()->numeroBoleta;
        //$ganador2 = $participantes->random()->numeroBoleta;

        dd('ganador1',$ganador1,'ganador2',$ganador2);

        // Guardar los ganadores en la tabla Rifas
        $rifa = Rifas::find($idRifa);
        $rifa->primerGanador = $ganador1;
        $rifa->segundoGanador = $ganador2;
        $rifa->save();

        return response()->json(['mensaje' => 'Ganadores seleccionados exitosamente'], 200);
    }
}
