<?php

namespace Tests\Feature;

use App\Models\Apuesta\Apuesta;
use App\Models\Transaccion\Transaccion;
use App\Models\Usuarios\Usuario;
use Database\Factories\ApuestaFactory;
use Database\Factories\ParticipanteApuestaFactory;
use Database\Factories\TransactionsFactory;
use Database\Factories\UsuarioFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ApuestaControllarTest extends TestCase
{

    use RefreshDatabase;

    /** @test */
    public function puede_crear_una_apuesta()
    {
        $apuesta = ApuestaFactory::new()->create();
        $apuestaData = $apuesta->toArray();

        $response = $this->postJson('/api/Apuestas/CreateApuesta', $apuestaData);

        $response->assertStatus(201)
            ->assertJson(['message' => 'Apuesta registrada con éxito']);
    }

    /** @test */
    public function puede_obtener_todas_las_apuestas_activas_con_informacion_del_usuario_creador()
    {

        ApuestaFactory::new()->count(3)->create();

        $response = $this->getJson('/api/Apuestas/GetAllApuestas');

        $response->assertStatus(200);
    }

    /** @test */
    public function obtener_apuesta_por_id()
    {

        $apuesta = ApuestaFactory::new()->create();
        $idApuesta = $apuesta->id;

        $response = $this->getJson("/api/Apuestas/GetApuesta/{$idApuesta}");

        if ($idApuesta) {
            $response->assertStatus(200);
        } else {
            $response->assertStatus(404);
        }
    }

    /** @test */
    public function obtener_apuestas_usuario_creador()
    {
        // Crear un usuario y una rifa para usar en la prueba
        $usuario = UsuarioFactory::new()->create();
        $apuestas = ApuestaFactory::new()->count(5)->create(['id_usuarioCreador' => $usuario->id]);

        $response = $this->getJson("/api/Apuestas/GetAllApuestasUsuarioCreador/{$usuario->id}");

        $response->assertStatus(200);

        // Verificar que la respuesta contiene las apuestas asociadas al usuario
        foreach ($apuestas as $apuesta) {
            $response->assertJsonFragment(['id' => $apuesta->id]);
        }
    }

    /** @test */
    public function puede_seleccionar_ganadores_apuesta()
    {
        $usuarioOrganizador = UsuarioFactory::new()->create(['rol' => 'organizador']);
        $apuesta = ApuestaFactory::new()->create(['id_usuarioCreador' => $usuarioOrganizador->id]);
        $participante1 = ParticipanteApuestaFactory::new()->create(['id_apuesta' => $apuesta->id, 'equipoApostado' => 'Fc Barcelona']);
        TransactionsFactory::new()->create(['id_usuario' => $participante1->id_usuario]);
        $participante2 = ParticipanteApuestaFactory::new()->create(['id_apuesta' => $apuesta->id, 'equipoApostado' => 'Real Madrid']);
        TransactionsFactory::new()->create(['id_usuario' => $participante2->id_usuario]);

        // Simular la solicitud con datos de prueba
        $request_data = [
            'id_apuesta' => $apuesta->id,
            'equipoGanador' => 'Real Madrid', // Puedes cambiar esto según tus necesidades de prueba
        ];
        $response = $this->postJson('/api/Apuestas/SeleccionarGanadores', $request_data);

        $response->assertStatus(200);
    }
}
