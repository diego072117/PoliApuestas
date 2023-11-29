<?php

namespace Database\Seeders;

use App\Models\ParticipanteRifa\Participanterifa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ParticipantesRifaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 9; $i++) {
            Participanterifa::create([
                'id_rifa' => '1',
                'id_usuario' => (string)$i,
                'numeroBoleta' => (string)$i,
            ]);
        }

        for ($i = 1; $i <= 9; $i++) {
            Participanterifa::create([
                'id_rifa' => '4',
                'id_usuario' => (string)$i,
                'numeroBoleta' => (string)$i,
            ]);
        }

        for ($i = 1; $i <= 9; $i++) {
            Participanterifa::create([
                'id_rifa' => '7',
                'id_usuario' => (string)$i,
                'numeroBoleta' => (string)$i,
            ]);
        }
    }
}
