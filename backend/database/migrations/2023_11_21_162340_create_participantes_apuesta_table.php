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
        Schema::create('participantes_apuesta', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('id_apuesta');
            $table->integer('valorApostado');
            $table->string('equipoApostado');
            $table->timestamps();
            $table->softDeletes();
            
            $table->foreign('id_usuario')->references('id')->on('usuarios');
            $table->foreign('id_apuesta')->references('id')->on('apuestas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participantes_apuesta');
    }
};
