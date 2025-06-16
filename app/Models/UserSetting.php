<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSetting extends Model
{
    protected $fillable = [
        'user_id', 'push_notifications', 'dark_mode', 'timezone',
        'date_format', 'time_format', 'language',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}