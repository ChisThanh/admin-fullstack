<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bills', function (Blueprint $table) {
            $table->bigIncrements('bill_id');
            $table->foreignId('user_id')->constrained();
            $table->bigInteger('total')->default(0);

            $table->integer('payment_status')->default(0);
            $table->integer('payment_method')->default(0);
            $table->integer('bill_status')->default(0);

            $table->date('delivery_date')->default(today());
            $table->date('received_date')->nullable();
            $table->string('delivery_address');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bills');
    }
};
