<?php

namespace Database\Factories;

use App\Models\ParticipanteApuesta\ParticipanteApuesta;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ParticipanteApuestaFactory extends Factory
{
    protected $model = ParticipanteApuesta::class;
    public function definition(): array
    {
        $apuesta = ApuestaFactory::new()->create();
        $equipoApostado = $this->faker->randomElement([$apuesta->equipoUno, $apuesta->equipoDos]);
        return [
            'id_usuario' => UsuarioFactory::new()->create()->id,
            'id_apuesta' => $apuesta->id,
            'equipoApostado' => $equipoApostado,
        ];
    }
}
