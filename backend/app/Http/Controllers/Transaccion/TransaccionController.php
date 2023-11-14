<?php

namespace App\Http\Controllers\Transaccion;

use App\Http\Controllers\Controller;
use App\Http\Requests\Transaccion\CreateTransaccion;
use App\Models\Transaccion\Transaccion;
use App\Models\Usuarios\Usuario;

class TransaccionController extends Controller
{
    public function createTransaccion(CreateTransaccion $request, $id_usuario)
    {
        $nuevoMonto = $request->input('monto_transaccion');

        // Buscar al usuario por el ID proporcionado en la URL
        $usuario = Usuario::find($id_usuario);

        if (!$usuario) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        $transaccion = $usuario->transaccion;



        if ($transaccion) {
            $montoActual = $transaccion->monto_transaccion;
            $nuevoMontoTotal = $montoActual + $nuevoMonto;
            $transaccion->update(['monto_transaccion' => $nuevoMontoTotal]);
            return response()->json(['message' => 'Recarga exitosa '], 201);
        } else {
            Transaccion::create([
                'id_usuario' => $usuario->id,
                'monto_transaccion' => $nuevoMonto,
            ]);
            return response()->json(['message' => 'Recarga exitosa'], 201);
        }
    }
}
