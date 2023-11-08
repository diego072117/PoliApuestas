<?php

namespace App\Models\Rifas;

use App\Models\ParticipanteRifa\Participanterifa;
use App\Models\Usuarios\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rifas extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'rifas';

    protected $fillable = [
        'nombreRifa',
        'descripcion',
        'id_usuarioCreador',
        'boletasTotales',
        'valorBoleta',
        'primerPremio',
        'segundoPremio',
        'estado',
        'primerGanador',
        'segundoGanador',
    ];

    public function creador()
    {
        return $this->belongsTo(Usuario::class, 'id_usuarioCreador', 'id');
    }

    public function participantes()
    {
        return $this->hasMany(Participanterifa::class, 'id_rifa', 'id');
    }
}
