<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;

class Product extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;

    public $translatedAttributes = [
        'description'
    ];
    protected $fillable = [
        'name',
        'brand_id',
        'category_id',
        'price',
        'price_sale',
        'stock_quantity',
        'id_image',
    ];
}
