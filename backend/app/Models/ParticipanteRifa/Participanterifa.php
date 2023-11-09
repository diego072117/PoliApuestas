<?php

namespace App\Models\ParticipanteRifa;

use App\Models\Rifas\Rifas;
use App\Models\Usuarios\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Participanterifa extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $table = 'participantes_rifa';

    protected $fillable = [
        'id_rifa',
        'id_usuario',
        'numeroBoleta',
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario', 'id');
    }

    public function rifa()
    {
        return $this->belongsTo(Rifas::class, 'id_rifa', 'id');
    }
}
