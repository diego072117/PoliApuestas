<?php

namespace Tests\Feature;

use Database\Factories\ParticipanteFactory;
use Database\Factories\RifaFactory;
use Database\Factories\TransactionsFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Database\Factories\UsuarioFactory;
use Tests\TestCase;

class ParticipanteTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function registrar_participante_rifa()
    {
        $usuario = UsuarioFactory::new()->create(['rol' => 'participante']);
        TransactionsFactory::new()->create(['id_usuario' => $usuario->id]);
        $rifa = RifaFactory::new()->create(['id_usuarioCreador' => $usuario->id]);
        $participanteData = [
            'id_rifa' => $rifa->id,
            'id_usuario' => $usuario->id,
            'numeroBoleta' => '13'
        ];

        $response = $this->postJson('/api/Participantes/CreateParticipante', $participanteData);

        $response->assertStatus(200);
    }

    /** @test */
    public function puede_obtener_participantes_por_rifa()
    {
        $usuario = UsuarioFactory::new()->create(['rol' => 'organizador']);
        $rifa = RifaFactory::new()->create(['id_usuarioCreador' => $usuario->id]);

        ParticipanteFactory::new()->count(3)->create(['id_rifa' => $rifa->id]);

        $response = $this->getJson("/api/Participantes/InfoParticipantes/{$rifa->id}");

        $response->assertStatus(200);
    }

    /** @test */
    public function puede_obtener_historial_del_participante()
    {
        $usuario = UsuarioFactory::new()->create(['rol' => 'organizador']);
        $rifa = RifaFactory::new()->create(['id_usuarioCreador' => $usuario->id]);

        $usuarioParticipante = UsuarioFactory::new()->create(['rol' => 'participante']);
        ParticipanteFactory::new()->count(3)->create(['id_rifa' => $rifa->id, 'id_usuario' => $usuarioParticipante->id]);

        $response = $this->getJson("/api/Participantes/HistorialUsurio/{$usuarioParticipante->id}");

        $response->assertStatus(200);
    }
}
