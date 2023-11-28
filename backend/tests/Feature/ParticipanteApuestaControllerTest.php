<?php

namespace Tests\Feature;

use Database\Factories\ApuestaFactory;
use Database\Factories\ParticipanteApuestaFactory;
use Database\Factories\TransactionsFactory;
use Database\Factories\UsuarioFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ParticipanteApuestaControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function registrar_participante_apuesta()
    {
        $participante = ParticipanteApuestaFactory::new()->create();
        TransactionsFactory::new()->create(['id_usuario' => $participante->id_usuario]);

        $participanteData = $participante->toArray();
        $response = $this->postJson('/api/ParticipantesApuesta/CreateParticipanteApuesta', $participanteData);

        $response->assertStatus(200);
    }

    /** @test */
    public function puede_obtener_participantes_por_apuesta()
    {
        $apuesta = ApuestaFactory::new()->create();

        ParticipanteApuestaFactory::new()->count(3)->create(['id_apuesta' => $apuesta->id]);

        $response = $this->getJson("/api/ParticipantesApuesta/InfoParticipantesApuesta/{$apuesta->id}");

        $response->assertStatus(200);
    }

    /** @test */
    public function puede_obtener_historial_del_participante()
    {
        $apuesta = ApuestaFactory::new()->create();

        $usuarioParticipante = UsuarioFactory::new()->create(['rol' => 'participante']);
        ParticipanteApuestaFactory::new()->count(3)->create(['id_apuesta' => $apuesta->id, 'id_usuario' => $usuarioParticipante->id]);

        $response = $this->getJson("/api/ParticipantesApuesta/HistorialApuestasUsurio/{$usuarioParticipante->id}");

        $response->assertStatus(200);
    }
}
