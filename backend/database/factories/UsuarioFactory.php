<?php

namespace Database\Factories;

use App\Models\Usuarios\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class UsuarioFactory extends Factory
{
    protected $model = Usuario::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'lastName' => $this->faker->lastName,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => $this->faker->unique()->randomNumber(8),
            'email' => $this->faker->unique()->safeEmail,
            'rol' => 'Participante',
            'telefono' => '3206957847',
            'password' => bcrypt('password'),
        ];
    }
}
