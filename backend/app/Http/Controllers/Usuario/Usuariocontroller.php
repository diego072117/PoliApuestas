<?php

namespace App\Http\Controllers\Usuario;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateUser;
use App\Models\Usuarios\Usuario;

class Usuariocontroller extends Controller
{
    public function createUser(CreateUser $request)
    {
        // La validación se maneja automáticamente por Laravel
        Usuario::create($request->all());

        return response()->json(['message' => 'Usuario registrado con éxito'], 201);
    }

    public function getAllUsers()
    {
        $users = Usuario::all();
        return response()->json($users);
    }

    public function getUserById($id)
    {
        $user = Usuario::find($id);
        if (!$user) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }
        return response()->json($user);
    }
}
