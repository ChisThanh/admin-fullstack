<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;

    protected $fillable = [
        'bill_id',
        'user_id',
        'total',
        'payment_status',
        'payment_method',
        'bill_status',
        'delivery_date',
        'received_date',
        'delivery_address',
    ];
}
