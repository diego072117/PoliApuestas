<?php

namespace Tests\Feature;

use Database\Factories\RifaFactory;
use Database\Factories\TransactionsFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Database\Factories\UsuarioFactory;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ParticipanteTest extends TestCase
{
    use RefreshDatabase;
    
        /** @test */
    public function registrar_participante_rifa()
    {
        $usuario = UsuarioFactory::new()->create(['rol' => 'participante']);
        $transaccion = TransactionsFactory::new()->create(['id_usuario' => $usuario->id]);
        $rifa = RifaFactory::new()->create(['id_usuarioCreador' => $usuario->id]); 
        $participanteData = [
            'id_rifa' => $rifa->id,       
            'id_usuario' => $usuario->id,
            'numeroBoleta' => '13'
        ]; 
        
        $response = $this->postJson('/api/Participantes/CreateParticipante', $participanteData);
        
        $response->assertStatus(200);
    }
}
