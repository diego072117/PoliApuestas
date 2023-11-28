<?php

namespace Database\Factories;

use App\Models\Apuesta\Apuesta;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ApuestaFactory extends Factory
{
    protected $model = Apuesta::class;
    public function definition(): array
    {
        return [
            'id_usuarioCreador' => UsuarioFactory::new()->create(['rol' => 'organizador'])->id,
            'nombreApuesta' => 'nombre de la apuesta',
            'tipoDeporte' => 'futbol',
            'equipoUno' => 'Real Madrid',
            'equipoDos' => 'Fc Barcelona',
            'monto' => $this->faker->numberBetween(1000, 5000),
            'equipoGanador' => null,
            'estado' => 'activa',
        ];
    }
}
