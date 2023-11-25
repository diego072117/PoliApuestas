<?php

namespace App\Models\Apuesta;

use App\Models\Usuarios\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Apuesta extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'apuestas';

    protected $fillable = [
        'id_usuarioCreador',
        'nombreApuesta',
        'tipoDeporte',
        'equipoUno',
        'equipoDos',
        'monto',
        'equipoGanador',
    ];

    public function creador()
    {
        return $this->belongsTo(Usuario::class, 'id_usuarioCreador', 'id');
    }
}
