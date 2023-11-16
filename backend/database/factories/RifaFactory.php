<?php

namespace Database\Factories;

use App\Models\Rifas\Rifas;
use App\Models\Usuarios\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RifaFactory extends Factory
{
    protected $model = Rifas::class;
    public function definition(): array
    {
        return [
            'nombreRifa' => $this->faker->word,
            'descripcion' => $this->faker->paragraph,
            'id_usuarioCreador' => UsuarioFactory::new()->create()->id,
            'boletasTotales' => $this->faker->numberBetween(1, 100),
            'valorBoleta' => $this->faker->numberBetween(1000, 5000),
            'primerPremio' => 'primer premio',
            'segundoPremio' => 'segundo premio',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ];
    }
}
