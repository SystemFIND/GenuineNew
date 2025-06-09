<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSetting extends Model
{
    protected $fillable = [
        'user_id',
        'dark_mode',
        'timezone',
        'date_format',
        'time_format',
        'push_notification',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
