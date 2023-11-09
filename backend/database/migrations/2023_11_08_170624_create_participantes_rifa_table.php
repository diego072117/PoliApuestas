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
        Schema::create('participantes_rifa', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('id_rifa');
            $table->integer('numeroBoleta');
            $table->timestamps();
            $table->softDeletes();
            
            $table->foreign('id_usuario')->references('id')->on('usuarios');
            $table->foreign('id_rifa')->references('id')->on('rifas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participantes_rifa');
    }
};
