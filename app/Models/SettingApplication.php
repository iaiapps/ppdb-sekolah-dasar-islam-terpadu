<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SettingApplication extends Model
{
    use HasFactory;
    protected $table = 'setting_application';
    protected $guarded = ['create_at', 'updated_at'];
    public $timestamps = false;
}
