<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @mixin IdeHelperBranch
 */
class Branch extends Model
{
    use SoftDeletes;

    protected $fillable = ['user_id', 'name', 'address', 'phone', 'email', 'clinic_id'];

    public function clinics(): BelongsTo
    {
        return $this->belongsTo(Clinic::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
