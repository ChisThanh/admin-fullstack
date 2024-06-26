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
        Schema::create('bill_details', function (Blueprint $table) {

            $table->foreignId('bill_id')->references('bill_id')->on('bills');
            $table->foreignId('product_id')->constrained();

            $table->integer('quantity')->default(1);
            $table->float('price')->default(0);
            $table->primary(['bill_id', 'product_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bill_details');
    }
};
