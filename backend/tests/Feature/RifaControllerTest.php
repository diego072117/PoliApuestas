<?php

namespace Tests\Feature;

use Database\Factories\RifaFactory;
use Database\Factories\UsuarioFactory;
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
}
