<?php

namespace Database\Seeders;

use App\Models\ParticipanteApuesta\ParticipanteApuesta;
use Database\Factories\ParticipanteApuestaFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ParticipantesApuestaSeeder extends Seeder
{

    public function run(): void
    {
        for ($i = 1; $i <= 9; $i++) {
            $randomTeam = rand(0, 1);

            $equipoApostado = $randomTeam ? 'Real Madrid' : 'Fc Barcelona';

            ParticipanteApuesta::create([
                'id_apuesta' => '1',
                'id_usuario' => (string)$i,
                'equipoApostado' => $equipoApostado,
            ]);
        }

        for ($i = 1; $i <= 9; $i++) {
            $randomTeam = rand(0, 1);

            $equipoApostado = $randomTeam ? 'Gigantes destructores' : 'The winners';
            ParticipanteApuesta::create([
                'id_apuesta' => '4',
                'id_usuario' => (string)$i,
                'equipoApostado' => $equipoApostado,
            ]);
        }

        for ($i = 1; $i <= 9; $i++) {
            $randomTeam = rand(0, 1);

            $equipoApostado = $randomTeam ? 'Estrellas fugaces' : 'Shockers';
            ParticipanteApuesta::create([
                'id_apuesta' => '7',
                'id_usuario' => (string)$i,
                'equipoApostado' => $equipoApostado,
            ]);
        }
    }
}
