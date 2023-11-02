<?php

namespace App\Models\Usuarios;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuarios'; // Especifica el nombre de la tabla si es diferente al nombre del modelo

    protected $fillable = [
        'numeroDocumento',
        'nombre',
        'correo',
        'telefono',
        'password',
    ];

    // relaciones con otras tablas, puedes definirlas aquí
}
