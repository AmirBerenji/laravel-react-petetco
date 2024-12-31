<?php

namespace App\Models;

use App\Enum\ClinicMediaCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\UploadedFile;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

/**
 * @mixin IdeHelperClinic
 */
class Clinic extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = ['user_id', 'name'];

    public function branches(): HasMany
    {
        return $this->hasMany(Branch::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @throws FileDoesNotExist
     * * @throws FileIsTooBig
     */
    public function uploadImage(UploadedFile $file, string $key): void
    {
        $type = ClinicMediaCategory::tryFrom($key);

        if (!$type || empty($file->path())) {
            return;
        }

        $this->addMedia($file)->toMediaCollection($key);
    }
}
