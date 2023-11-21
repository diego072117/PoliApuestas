<?php

namespace App\Models\ParticipanteApuesta;

use App\Models\Apuesta\Apuesta;
use App\Models\Usuarios\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ParticipanteApuesta extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'participantes_apuesta';

    protected $fillable = [
        'id_usuario',
        'id_apuesta',
        'valorApostado',
        'equipoApostado',
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario', 'id');
    }

    
    public function apuesta()
    {
        return $this->belongsTo(Apuesta::class, 'id_apuesta', 'id');
    }
}
