<?php

namespace App\Models\Usuarios;

use App\Models\Transaccion\Transaccion;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;

class Usuario extends Authenticatable implements JWTSubject
{
    use HasFactory, SoftDeletes, Notifiable;

    protected $table = 'usuarios'; // Especifica el nombre de la tabla si es diferente al nombre del modelo

    protected $fillable = [
        'name',
        'tipoDocumento',
        'numeroDocumento',
        'email',
        'rol',
        'telefono',
        'password',
    ];

    // relaciones con otras tablas, puedes definirlas aquí
    public function transaccion(): HasOne
    {
        return $this->hasOne(Transaccion::class, 'id_usuario');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getAuthPassword()
    {
        return $this->password;
    }
}
