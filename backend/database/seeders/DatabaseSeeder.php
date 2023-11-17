<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    private $seeders = [
        // Otros seeders aquí
        UsuariosSeeder::class,
        RifasSeeder::class,
    ];

    public function run()
    {
        $this->call($this->seeders);
    }
}
