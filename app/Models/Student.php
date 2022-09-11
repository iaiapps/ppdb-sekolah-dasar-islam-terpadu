<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\User;
use App\Models\CostCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->diffForHumans();
    }
    public function costCategory()
    {
        return $this->hasOne(CostCategory::class);
    }
}
