<?php

namespace Database\Seeders;

use App\Models\Usuarios\Usuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsuariosSeeder extends Seeder
{
    
    public function run(): void
    {
        // Crear dos usuarios
        Usuario::create([
            'name' => 'Diego',
            'secondName' => 'Alexander',
            'lastName' => 'Parra',
            'secondLastName' => 'Calderón',
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '10649875',
            'email' => 'p@gmail.com',
            'rol' => 'participante',
            'telefono' => '123456789',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Santiago',
            'secondName' => 'Esteban',
            'lastName' => 'Carreño',
            'secondLastName' => 'Mancera',
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '106498895',
            'email' => 'santi@gmail.com',
            'rol' => 'participante',
            'telefono' => '123456789',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Merly',
            'secondName' => null,
            'lastName' => 'Calderon',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '32679854',
            'email' => 'merly@gmail.com',
            'rol' => 'participante',
            'telefono' => '123456789',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Luisa',
            'secondName' => null,
            'lastName' => 'Parra',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '10031648',
            'email' => 'luisa@gmail.com',
            'rol' => 'participante',
            'telefono' => '123456789',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Johan',
            'secondName' => null,
            'lastName' => 'Avendaño',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '15623648',
            'email' => 'Johan@gmail.com',
            'rol' => 'participante',
            'telefono' => '136892347',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Julieth',
            'secondName' => null,
            'lastName' => 'Losano',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '156987534',
            'email' => 'Julienth@gmail.com',
            'rol' => 'participante',
            'telefono' => '136892347',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Nicolas',
            'secondName' => null,
            'lastName' => 'Garcia',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '134658034',
            'email' => 'nicolasn@gmail.com',
            'rol' => 'participante',
            'telefono' => '136892347',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'kevin',
            'secondName' => null,
            'lastName' => 'Torres',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '16879345',
            'email' => 'kevin@gmail.com',
            'rol' => 'participante',
            'telefono' => '136892347',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Carlos',
            'secondName' => null,
            'lastName' => 'Falcon',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '19376248',
            'email' => 'carlos@gmail.com',
            'rol' => 'participante',
            'telefono' => '136892347',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Daniela',
            'secondName' => null,
            'lastName' => 'Garcia',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '1112236',
            'email' => 'dani@gmail.com',
            'rol' => 'organizador',
            'telefono' => '987654321',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Juliana',
            'secondName' => null,
            'lastName' => 'Melo',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '1112235',
            'email' => 'Juli@gmail.com',
            'rol' => 'organizador',
            'telefono' => '987654745',
            'password' => Hash::make('12345678aA.'),
        ]);

        Usuario::create([
            'name' => 'Daniel',
            'secondName' => null,
            'lastName' => 'Sierra',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '1564897',
            'email' => 'Daniel@gmail.com',
            'rol' => 'organizador',
            'telefono' => '987654691',
            'password' => Hash::make('12345678aA.'),
        ]);

    }
}
