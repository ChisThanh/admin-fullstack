<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@mail.com',
            'phone' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'id_image' => 1,
            'role' => 0,
            'password' => Hash::make('123'),
        ]);

        for ($i = 0; $i < 10; $i++) {
            User::create([
                'name' => fake()->name(),
                'email' => fake()->unique()->safeEmail(),
                'phone' => fake()->phoneNumber(),
                'address' => fake()->address(),
                'id_image' => 1,
                'role' => 1,
                'password' => Hash::make('123'),
            ]);
        }
    }
}
