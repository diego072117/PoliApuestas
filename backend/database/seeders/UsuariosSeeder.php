<?php

namespace Database\Seeders;

use App\Models\Usuarios\Usuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
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
            'password' => Hash::make('123'),
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
            'password' => Hash::make('123'),
        ]);

        Usuario::create([
            'name' => 'Daniela',
            'secondName' => null,
            'lastName' => 'Garcia',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '1112236547',
            'email' => 'dani@gmail.com',
            'rol' => 'organizador',
            'telefono' => '987654321',
            'password' => Hash::make('123'),
        ]);

        Usuario::create([
            'name' => 'Juliana',
            'secondName' => null,
            'lastName' => 'Melo',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '1112235689',
            'email' => 'Juli@gmail.com',
            'rol' => 'organizador',
            'telefono' => '987654745',
            'password' => Hash::make('123'),
        ]);

        Usuario::create([
            'name' => 'Daniel',
            'secondName' => null,
            'lastName' => 'Sierra',
            'secondLastName' => null,
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '1564897123',
            'email' => 'Daniel@gmail.com',
            'rol' => 'organizador',
            'telefono' => '987654691',
            'password' => Hash::make('123'),
        ]);

    }
}
