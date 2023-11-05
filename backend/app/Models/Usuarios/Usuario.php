<?php

namespace App\Models\Usuarios;

use App\Models\Transaccion\Transaccion;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Usuario extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'usuarios'; // Especifica el nombre de la tabla si es diferente al nombre del modelo

    protected $fillable = [
        'tipoDocumento',
        'numeroDocumento',
        'nombre',
        'correo',
        'rol',
        'telefono',
        'password',
    ];

    // relaciones con otras tablas, puedes definirlas aquí
    public function transaccion(): HasOne
    {
        return $this->hasOne(Transaccion::class, 'id_usuario');
    }
}
