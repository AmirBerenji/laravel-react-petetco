<?php

namespace App\Models;

use App\Enum\ClinicMediaCategory;
use App\Observers\ClinicObserver;
use App\Traits\UploadImageTrait;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\UploadedFile;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

/**
 * @mixin IdeHelperClinic
 */
#[ObservedBy([ClinicObserver::class])]
class Clinic extends Model implements HasMedia
{
    use InteractsWithMedia;
    use SoftDeletes;
    use UploadImageTrait;

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
     *                          * @throws FileIsTooBig
     */
    public function uploadImage(UploadedFile $file, string $key): void
    {
        $type = ClinicMediaCategory::tryFrom($key);

        if (! $type || empty($file->path())) {
            return;
        }

        $this->addMedia($file)->toMediaCollection($key);
    }

    public function getImageUrl(string $key): string
    {
        return $this->getMedia($key)->first()->getUrl();
    }

    public function editImage(UploadedFile $file, string $key): void
    {
        $type = ClinicMediaCategory::tryFrom($key);

        if (! $type || empty($file->path())) {
            return;
        }

        $this->clearMediaCollection($key);
        $this->addMedia($file)->toMediaCollection($key);
    }
}
