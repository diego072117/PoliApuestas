<?php

namespace App\Http\Controllers\Usuario;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateUser;
use App\Models\Usuarios\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class Usuariocontroller extends Controller
{
    public function createUser(CreateUser $request)
    {
        // La validación se maneja automáticamente por Laravel
        $userData = $request->all();

        // Aplicar hash bcrypt a la contraseña antes de almacenarla
        $userData['password'] = Hash::make($userData['password']);

        Usuario::create($userData);

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

    public function loginUser(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['message' => 'Credenciales incorrectas'], 401);
        }

        $user = auth()->user(); // Obtén el usuario autenticado

        return $this->respondWithTokenAndUser($token, $user);
    }

    protected function respondWithTokenAndUser($token, $user)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => $user,
        ]);
    }
}
