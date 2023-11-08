<?php

namespace App\Http\Controllers\Rifa;

use App\Http\Controllers\Controller;
use App\Http\Requests\Rifa\CreateRifa;
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
}
