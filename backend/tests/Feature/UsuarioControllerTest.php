<?php

namespace Tests\Feature;

use Database\Factories\UsuarioFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UsuarioControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function puede_registrar_un_usuario()
    {

        $userData = [
            'name' => 'Prueba',
            'lastName' => 'Usuario',
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '1001095876',
            'email' => 'prueba@correo.com',
            'rol' => 'Participante',
            'telefono' => '3134592567',
            'password' => bcrypt('123456789'),
        ];

        $response = $this->postJson('/api/Users/CreateUser', $userData);

        $response->assertStatus(201)->assertJson(['message' => 'Usuario registrado con éxito']);
    }

    /** @test */
    public function puede_obtener_todos_los_usuarios()
    {
        // Crear algunos usuarios para la prueba
        UsuarioFactory::new()->count(3)->create();

        // Llamar a la ruta que devuelve todos los usuarios
        $response = $this->getJson('/api/Users/GetAllUsers');

        // Verificar que la respuesta sea exitosa
        $response->assertStatus(200);
    }

    /** @test */
    public function puede_obtener_un_usuario_por_id()
    {
        // Crear un usuario para la prueba
        $usuario = UsuarioFactory::new()->create();

        // Llamar a la ruta que devuelve un usuario por su ID
        $response = $this->getJson('/api/Users/GetUser/' . $usuario->id);

        // Verificar que la respuesta sea exitosa
        $response->assertStatus(200);

        // Verificar que el usuario devuelto sea el correcto
        $response->assertJsonFragment([
            'id' => $usuario->id,
            'name' => $usuario->name,

        ]);
    }

    /** @test */
    public function puede_iniciar_sesion_y_obtener_token()
    {
        // Crear un usuario para la prueba
        $usuario = UsuarioFactory::new()->create([
            'name' => 'Prueba',
            'lastName' => 'Usuario',
            'tipoDocumento' => 'CC',
            'numeroDocumento' => '1001095876',
            'email' => 'prueba@correo.com',
            'rol' => 'Participante',
            'telefono' => '3134592567',
            'password' => bcrypt('123456789'),
        ]);

        // Datos de inicio de sesión válidos
        $credentials = [
            'email' => 'prueba@correo.com',
            'password' => '123456789',
        ];

        // Llamar a la ruta que inicia sesión
        $response = $this->postJson('/api/Users/Login', $credentials);

        // Verificar que la respuesta sea exitosa
        $response->assertStatus(200);

        // Verificar que el token de acceso esté presente
        $response->assertJsonStructure(['access_token', 'token_type', 'user']);

        // Verificar que el usuario devuelto sea el correcto
        $response->assertJsonFragment([
            'id' => $usuario->id,
            'email' => $usuario->email,
            // Agrega más campos según la estructura de tu modelo Usuario
        ]);
    }

    /** @test */
    public function no_puede_iniciar_sesion_con_credenciales_incorrectas()
    {
        // Datos de inicio de sesión inválidos
        $credentials = [
            'email' => 'noexist@example.com',
            'password' => 'wrongpassword',
        ];

        // Llamar a la ruta que intenta iniciar sesión con credenciales incorrectas
        $response = $this->postJson('/api/Users/Login', $credentials);

        // Verificar que la respuesta indique credenciales incorrectas
        $response->assertStatus(401)
            ->assertJson(['message' => 'Credenciales incorrectas']);
    }

    

}
