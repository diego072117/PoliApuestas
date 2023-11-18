<?php

namespace Database\Factories;

use App\Models\ParticipanteRifa\Participanterifa;
use App\Models\Usuarios\Usuario;
use App\Models\Rifas\Rifas;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ParticipanteFactory extends Factory
{
    protected $model = Participanterifa::class;
    public function definition(): array
    {
        return [
            'id_usuario' => UsuarioFactory::new()->create()->id,
            'id_rifa' => RifaFactory::new()->create()->id,
            'numeroBoleta' => '5'
        ];
    }
    public function configure()
    {
        return $this->afterCreating(function (Participanterifa $participante) {
            // Puedes realizar acciones adicionales después de crear el participante si es necesario
        });
    }
}
