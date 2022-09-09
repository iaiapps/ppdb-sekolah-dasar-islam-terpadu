<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SettingPpdb extends Model
{
    protected $table = 'setting_ppdb';
    protected $guarded = ['create_at', 'updated_at'];
    public $timestamps = false;
    use HasFactory;
}
