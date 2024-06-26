<?php

namespace Database\Seeders;

use App\Models\Bill;
use App\Models\BillDetail;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\QueryException;
use Illuminate\Database\Seeder;

class BillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $user = User::get('id');
        $product = Product::get('id');

        for ($i = 0; $i < 20; $i++) {
            $bill = Bill::create([
                'user_id' => $user->random()->id,
                'total' => fake()->numberBetween(1000, 1000000),
                'payment_status' => fake()->numberBetween(0, 1),
                'payment_method' => fake()->numberBetween(0, 1),
                'bill_status' => fake()->numberBetween(0, 1),
                'delivery_date' => fake()->date(),
                'received_date' => fake()->date(),
                'delivery_address' => fake()->address(),
            ]);

            for ($j = 0; $j < 2; $j++) {
                try {
                    BillDetail::create([
                        'bill_id' => $bill->id,
                        'product_id' => $product->random()->id,
                        'quantity' => fake()->numberBetween(1, 10),
                        'price' => fake()->numberBetween(1000, 1000000),
                    ]);
                } catch (QueryException $e) {
                }
            }
        }
    }
}
