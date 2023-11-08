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
        Schema::create('rifas', function (Blueprint $table) {
            $table->id();
            $table->string('nombreRifa');
            $table->text('descripcion')->nullable();
            $table->unsignedBigInteger('id_usuarioCreador');
            $table->integer('boletasTotales');
            $table->integer('valorBoleta');
            $table->string('primerPremio');
            $table->string('segundoPremio');
            $table->string('estado')->default('activa');
            $table->unsignedBigInteger('primerGanador')->nullable();
            $table->unsignedBigInteger('segundoGanador')->nullable();
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
        Schema::dropIfExists('rifas');
    }
};
