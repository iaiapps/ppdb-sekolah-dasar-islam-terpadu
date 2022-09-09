<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SettingTimeline extends Model
{
    use HasFactory;
    protected $table = 'setting_timeline';
    protected $guarded = ['create_at', 'updated_at'];
    public $timestamps = false;
}
