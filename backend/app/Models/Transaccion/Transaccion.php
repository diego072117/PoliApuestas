<?php

namespace App\Models\Transaccion;

use App\Models\Usuarios\Usuario;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaccion extends Model
{
    use HasFactory, SoftDeletes;
    // Habilita Soft Deletes

    protected $table = 'transaccions';

    protected $fillable = [
        'id_usuario',
        'monto_transaccion'
    ];

    //Relaciones

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id');
    }
}
