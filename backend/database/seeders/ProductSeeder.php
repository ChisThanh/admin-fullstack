<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brand = Brand::query()->get('id');
        $category = Category::query()->get('id');


        for ($i = 0; $i < 50; $i++) {
            Product::create([
                'name' => "IPhone " . fake()->numberBetween(1, 12) . " Pro Max",
                'brand_id' => $brand->random()->id,
                'category_id' => $category->random()->id,
                'price' => fake()->numberBetween(1000, 1000000),
                'price_sale' => fake()->numberBetween(1000, 1000000),
                'stock_quantity' => fake()->numberBetween(1, 100),
                'vi' => [
                    'description' => fake()->sentence(),
                ],
                'en' => [
                    'description' => fake()->sentence(),
                ]
            ]);
        }
    }
}
