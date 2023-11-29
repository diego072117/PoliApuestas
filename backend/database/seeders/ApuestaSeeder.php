<?php

namespace Database\Seeders;

use App\Models\Apuesta\Apuesta;
use Illuminate\Database\Seeder;

class ApuestaSeeder extends Seeder
{
    public function run(): void
    {
        Apuesta::create([
            'id_usuarioCreador' => '10',
            'nombreApuesta' => 'Apuesta uno',
            'tipoDeporte' => 'Futbol',
            'equipoUno' => 'Real Madrid',
            'equipoDos' => 'Fc Barcelona',
            'monto' => 2000,
            'equipoGanador' => null,
        ]);

        Apuesta::create([
            'id_usuarioCreador' => '10',
            'nombreApuesta' => 'Apuesta dos',
            'tipoDeporte' => 'Futbol',
            'equipoUno' => 'Real Madrid',
            'equipoDos' => 'Fc Barcelona',
            'monto' => 3000,
            'equipoGanador' => null,
        ]);

        Apuesta::create([
            'id_usuarioCreador' => '10',
            'nombreApuesta' => 'Apuesta tres',
            'tipoDeporte' => 'Futbol',
            'equipoUno' => 'Real Madrid',
            'equipoDos' => 'Fc Barcelona',
            'monto' => 4000,
            'equipoGanador' => null,
        ]);

        Apuesta::create([
            'id_usuarioCreador' => '11',
            'nombreApuesta' => 'Apuesta cuatro',
            'tipoDeporte' => 'Voleibol',
            'equipoUno' => 'Gigantes destructores',
            'equipoDos' => 'The winners',
            'monto' => 2000,
            'equipoGanador' => null,
        ]);

        Apuesta::create([
            'id_usuarioCreador' => '11',
            'nombreApuesta' => 'Apuesta cinco',
            'tipoDeporte' => 'Voleibol',
            'equipoUno' => 'Gigantes destructores',
            'equipoDos' => 'The winners',
            'monto' => 2000,
            'equipoGanador' => null,
        ]);

        Apuesta::create([
            'id_usuarioCreador' => '11',
            'nombreApuesta' => 'Apuesta seis',
            'tipoDeporte' => 'Voleibol',
            'equipoUno' => 'Gigantes destructores',
            'equipoDos' => 'The winners',
            'monto' => 2000,
            'equipoGanador' => null,
        ]);

        Apuesta::create([
            'id_usuarioCreador' => '12',
            'nombreApuesta' => 'Apuesta siete',
            'tipoDeporte' => 'Baloncesto',
            'equipoUno' => 'Estrellas fugaces',
            'equipoDos' => 'Shockers',
            'monto' => 3000,
            'equipoGanador' => null,
        ]);

        Apuesta::create([
            'id_usuarioCreador' => '12',
            'nombreApuesta' => 'Apuesta ocho',
            'tipoDeporte' => 'Baloncesto',
            'equipoUno' => 'Estrellas fugaces',
            'equipoDos' => 'Shockers',
            'monto' => 3000,
            'equipoGanador' => null,
        ]);

        Apuesta::create([
            'id_usuarioCreador' => '12',
            'nombreApuesta' => 'Apuesta nueve',
            'tipoDeporte' => 'Baloncesto',
            'equipoUno' => 'Estrellas fugaces',
            'equipoDos' => 'Shockers',
            'monto' => 3000,
            'equipoGanador' => null,
        ]);
    }
}
