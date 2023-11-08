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
}
