<?php

namespace Database\Factories;
use App\Models\Transaccion\Transaccion;
use App\Models\Usuarios\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TransactionsFactory extends Factory
{
    protected $model = Transaccion::class;
    public function definition(): array
    {
        return [
            'id_usuario' => UsuarioFactory::new()->create()->id,
            'monto_transaccion' => '50000'
        ];
    }
}
