<?php

namespace Tests\Feature;

use Database\Factories\RifaFactory;
use Database\Factories\UsuarioFactory;
use Database\Factories\ParticipanteFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RifaControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function puede_crear_una_rifa()
    {
        $usuario = UsuarioFactory::new()->create(['rol' => 'organizador']);

        $rifaData = [
            'nombreRifa' => 'Nombre de la Rifa',
            'descripcion' => 'Descripción de la Rifa',
            'id_usuarioCreador' => $usuario->id,
            'boletasTotales' => 100,
            'valorBoleta' => 1000,
            'primerPremio' => 'Premio 1',
            'segundoPremio' => 'Premio 2',
            'estado' => 'activa',
            'primerGanador' => null,
            'segundoGanador' => null,
        ];

        $response = $this->postJson('/api/Rifa/CreateRifa', $rifaData);

        $response->assertStatus(201)
            ->assertJson(['message' => 'Rifa creada con éxito']);
    }

    /** @test */
    public function puede_obtener_todas_las_rifas_activas_con_informacion_del_usuario_creador()
    {
        // Crear algunas rifas para la prueba
        RifaFactory::new()->count(3)->create();

        // Llamar a la ruta que devuelve todas las rifas activas
        $response = $this->getJson('/api/Rifa/GetAllRifas');

        // Verificar que la respuesta sea exitosa
        $response->assertStatus(200);
    }

    /** @test */
    public function obtener_todas_las_rifas()
    {
        // Crear un usuario y una rifa para usar en la prueba
        $usuario = UsuarioFactory::new()->create(['rol' => 'organizador']);
        RifaFactory::new()->count(6)->create(['id_usuarioCreador' => $usuario->id]);

        // Realizar una solicitud GET a la ruta que maneja getAllRifas
        $response = $this->getJson('/api/Rifa/GetAllRifas');

        // Verificar que la respuesta sea exitosa (código de estado 200)
        $response->assertStatus(200);

        // Verificar que la respuesta contiene las rifas activas
        $response->assertJsonFragment([
            'estado' => 'activa',
            'id_usuarioCreador' => $usuario->id
        ]);
    }

    /** @test */
    public function obtener_rifa_por_id()
    {
        // Crear una rifa para usar en la prueba
        $rifa = RifaFactory::new()->create();
        $idRifa = $rifa->id;

        // Realizar una solicitud GET a la ruta que maneja getRifaById
        $response = $this->getJson("/api/Rifa/GetRifa/{$idRifa}");

        // Verificar que la respuesta sea exitosa (código de estado 200) si la rifa existe
        if ($rifa) {
            $response->assertStatus(200);
        } else {
            // Si la rifa no existe, verificar que la respuesta sea 404
            $response->assertStatus(404);
        }
    }

    /** @test */

    public function obtener_boletas_disponibles()
    {
        // Crear un usuario y una rifa para usar en la prueba
        $usuario = UsuarioFactory::new()->create();
        $rifa = RifaFactory::new()->create(['id_usuarioCreador' => $usuario->id]);

        // Crear algunos participantes para la rifa
        ParticipanteFactory::new()->count(5)->create(['id_rifa' => $rifa->id]);

        // Realizar una solicitud GET a la ruta que maneja getBoletasDisponibles
        $response = $this->getJson("/api/Rifa/GetBoletasDisponibles/{$rifa->id}");

        // Verificar que la respuesta sea exitosa (código de estado 200)
        $response->assertStatus(200);
    }

    /** @test */
    public function obtener_rifas_usuario_creador()
    {
        // Crear un usuario y una rifa para usar en la prueba
        $usuario = UsuarioFactory::new()->create();
        $rifas = RifaFactory::new()->count(3)->create(['id_usuarioCreador' => $usuario->id]);


        // Realizar una solicitud GET a la ruta que maneja getBoletasDisponibles
        $response = $this->getJson("/api/Rifa/GetAllRifasUsuarioCreador/{$usuario->id}");

        // Verificar que la respuesta sea exitosa (código de estado 200)
        $response->assertStatus(200);

        // Verificar que la respuesta contiene las rifas asociadas al usuario
        foreach ($rifas as $rifa) {
            $response->assertJsonFragment(['id' => $rifa->id]);
        }
    }

    /** @test */
    public function puede_seleccionar_ganadores()
    {
        $usuario1 = UsuarioFactory::new()->create(['rol' => 'organizador']);
        $rifa = RifaFactory::new()->create(['id_usuarioCreador' => $usuario1->id]);

        ParticipanteFactory::new()->count(4)->create(['id_rifa' => $rifa->id]);
        
        $response = $this->postJson("/api/Rifa/SeleccionarGanadores/{$rifa->id}");
      
        $response->assertStatus(200);
    }
}
