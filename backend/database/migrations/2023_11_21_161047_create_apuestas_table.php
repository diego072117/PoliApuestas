<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('apuestas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_usuarioCreador');
            $table->string('tipoDeporte');
            $table->string('equipoUno');
            $table->string('equipoDos');
            $table->integer('montoMinimo');
            $table->integer('montoMaximo');
            $table->string('equipoGanador')->nullable();
            $table->string('estado')->default('activa');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('id_usuarioCreador')->references('id')->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apuestas');
    }
};
