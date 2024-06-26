<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductReview;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\QueryException;
use Illuminate\Database\Seeder;

class ProductReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 'user_id',
        // 'product_id',
        // 'rating',
        // 'comment',
        // 'id_image',
        // 'status',
        $user = User::get('id');
        $product = Product::get('id');

        for ($i = 0; $i < 50; $i++) {
            try {
                ProductReview::create([
                    'user_id' => $user->random()->id,
                    'product_id' => $product->random()->id,
                    'rating' => fake()->numberBetween(1, 5),
                    'comment' => fake()->sentence(),
                    'status' => fake()->numberBetween(0, 1),
                ]);
            } catch (QueryException $e) {
            }
        }
    }
}
