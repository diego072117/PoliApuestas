<?php

namespace Tests\Feature;

use App\Models\Transaccion\Transaccion;
use Database\Factories\TransactionsFactory;
use Database\Factories\UsuarioFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TransaccionTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function registrar_transaccion_de_usuario()
    {
        $usuario = UsuarioFactory::new()->create(['rol' => 'participante']);

        $transaccionData = [
            'monto_transaccion' => 5000,
        ];

        $response = $this->postJson("api/Transaccion/{$usuario->id}", $transaccionData);
        $response->assertStatus(201);
    }

    /** @test */
    public function puede_actualizar_transaccion_para_usuario_existente()
    {
        $usuario = UsuarioFactory::new()->create(['rol' => 'participante']);
        TransactionsFactory::new()->create(['id_usuario' => $usuario->id]);

        $transaccionData = [
            'monto_transaccion' => 5000,
        ];

        $response = $this->postJson("api/Transaccion/{$usuario->id}", $transaccionData);
        $response->assertStatus(201);
    }

    /** @test */
    public function devuelve_error_si_usuario_no_existe()
    {
        // Intentar crear una transacción para un usuario que no existe
        $response = $this->postJson('/api/Transaccion/999', ['monto_transaccion' => 5000]);

        // Verificar que la respuesta indique que el usuario no fue encontrado (código de estado 404)
        $response->assertStatus(404);

        // Verificar que el mensaje en la respuesta sea correcto
        $response->assertJson(['message' => 'Usuario no encontrado']);
    }

    /** @test */
    public function obtener_saldo_usuario()
    {
        $usuario = UsuarioFactory::new()->create();
        TransactionsFactory::new()->create(['id_usuario' => $usuario->id]);

        $response = $this->getJson('/api/Transaccion/SaldoUsuario/{$usuario->id}');

        $response->assertStatus(200);
    }

    /** @test */
    public function devuelve_cero_si_no_hay_transaccion_para_el_usuario()
    {
        // Crear un usuario sin transacción para la prueba
        $usuario = UsuarioFactory::new()->create();

        // Realizar una solicitud GET para obtener la transacción por ID de usuario
        $response = $this->getJson("/api/Transaccion/SaldoUsuario/{$usuario->id}");

        $response->assertSee('0');
    }
}
