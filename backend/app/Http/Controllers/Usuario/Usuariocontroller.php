<?php

namespace App\Http\Controllers\Usuario;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateNewUser;
use App\Models\Usuarios\Usuario;
use Illuminate\Http\Request;

class Usuariocontroller extends Controller
{
    public function createUser(CreateNewUser $request)
    {
        // La validación se maneja automáticamente por Laravel
        Usuario::create($request->all());

        return response()->json(['message' => 'Usuario registrado con éxito'], 201);
    }
}
