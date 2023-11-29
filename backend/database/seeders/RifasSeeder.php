<?php

namespace Database\Seeders;

use App\Models\Rifas\Rifas;
use Illuminate\Database\Seeder;

class RifasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Rifas::create([
            'nombreRifa' => 'Primera Rifa',
            'descripcion' => 'Esta es la descripcion de la primera rifa',
            'id_usuarioCreador' => '10',
            'boletasTotales' => '100',
            'valorBoleta' => '1000',
            'primerPremio' => 'premios/primer_premio_1700171420.jpg',
            'segundoPremio' => 'premios/segundo_premio_1700171420.jpg',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ]);

        Rifas::create([
            'nombreRifa' => 'Segunda Rifa',
            'descripcion' => 'Esta es la descripcion de la segunda rifa',
            'id_usuarioCreador' => '10',
            'boletasTotales' => '100',
            'valorBoleta' => '1000',
            'primerPremio' => 'premios/primer_premio_1700171420.jpg',
            'segundoPremio' => 'premios/segundo_premio_1700171420.jpg',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ]);

        Rifas::create([
            'nombreRifa' => 'Tercera Rifa',
            'descripcion' => 'Esta es la descripcion de la tercera rifa',
            'id_usuarioCreador' => '10',
            'boletasTotales' => '100',
            'valorBoleta' => '1000',
            'primerPremio' => 'premios/primer_premio_1700171420.jpg',
            'segundoPremio' => 'premios/segundo_premio_1700171420.jpg',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ]);

        Rifas::create([
            'nombreRifa' => 'Cuarta Rifa',
            'descripcion' => 'Esta es la descripcion de la cuarta rifa',
            'id_usuarioCreador' => '11',
            'boletasTotales' => '100',
            'valorBoleta' => '2000',
            'primerPremio' => 'premios/primer_premio_1700171420.jpg',
            'segundoPremio' => 'premios/segundo_premio_1700171420.jpg',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ]);

        Rifas::create([
            'nombreRifa' => 'Quinta Rifa',
            'descripcion' => 'Esta es la descripcion de la quinta rifa',
            'id_usuarioCreador' => '11',
            'boletasTotales' => '100',
            'valorBoleta' => '2000',
            'primerPremio' => 'premios/primer_premio_1700171420.jpg',
            'segundoPremio' => 'premios/segundo_premio_1700171420.jpg',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ]);

        Rifas::create([
            'nombreRifa' => 'Sexta Rifa',
            'descripcion' => 'Esta es la descripcion de la sexta rifa',
            'id_usuarioCreador' => '11',
            'boletasTotales' => '100',
            'valorBoleta' => '2000',
            'primerPremio' => 'premios/primer_premio_1700171420.jpg',
            'segundoPremio' => 'premios/segundo_premio_1700171420.jpg',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ]);

        Rifas::create([
            'nombreRifa' => 'Septima Rifa',
            'descripcion' => 'Esta es la descripcion de la Septima rifa',
            'id_usuarioCreador' => '12',
            'boletasTotales' => '100',
            'valorBoleta' => '5000',
            'primerPremio' => 'premios/primer_premio_1700171420.jpg',
            'segundoPremio' => 'premios/segundo_premio_1700171420.jpg',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ]);

        Rifas::create([
            'nombreRifa' => 'Octava Rifa',
            'descripcion' => 'Esta es la descripcion de la Octava rifa',
            'id_usuarioCreador' => '12',
            'boletasTotales' => '100',
            'valorBoleta' => '5000',
            'primerPremio' => 'premios/primer_premio_1700171420.jpg',
            'segundoPremio' => 'premios/segundo_premio_1700171420.jpg',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ]);

        Rifas::create([
            'nombreRifa' => 'Novena Rifa',
            'descripcion' => 'Esta es la descripcion de la Novena rifa',
            'id_usuarioCreador' => '12',
            'boletasTotales' => '100',
            'valorBoleta' => '5000',
            'primerPremio' => 'premios/primer_premio_1700171420.jpg',
            'segundoPremio' => 'premios/segundo_premio_1700171420.jpg',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ]);
    }
}
