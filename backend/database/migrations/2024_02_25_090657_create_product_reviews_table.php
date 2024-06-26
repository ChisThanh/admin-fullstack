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
        Schema::create('product_reviews', function (Blueprint $table) {

            $table->foreignId('user_id')->constrained();
            $table->foreignId('product_id')->constrained();

            $table->float('rating')->default(0);
            $table->string('comment')->default('');
            $table->string('id_image')->nullable();

            $table->integer('status')->default(0);

            $table->timestamps();
            $table->primary(['user_id', 'product_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_reviews');
    }
};
