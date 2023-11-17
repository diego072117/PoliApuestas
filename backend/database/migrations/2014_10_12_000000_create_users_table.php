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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('secondName')->nullable();
            $table->string('lastName');
            $table->string('secondLastName')->nullable();
            $table->string('tipoDocumento');
            $table->unsignedBigInteger('numeroDocumento');
        
            $table->string('email')->unique();
            $table->string('rol');
            $table->string('telefono', 15);
            $table->string('password');
            $table->timestamps();
            $table->softDeletes(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
