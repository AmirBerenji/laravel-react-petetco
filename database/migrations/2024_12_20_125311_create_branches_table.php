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
        Schema::create('branches', function (Blueprint $table) {
            $table->id();
            $table->string('name', length: 120);
            $table->string('phone', length: 100);
            $table->string('email', length: 400);
            $table->string('address', length: 2000);
            $table->foreignIdFor(\App\Models\Clinic::class)->index();
            $table->foreignIdFor(\App\Models\User::class)->index();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('branches');
    }
};
