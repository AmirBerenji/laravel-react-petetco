<?php

namespace App\Models;

use App\Enum\ClinicMediaCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\UploadedFile;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

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

    public function uploadImage(array $files): void
    {
        foreach (ClinicMediaCategory::cases() as $category) {
            $file = $files[$category->value] ?? null;

            if ($file && $this->isValidImage($file)) {
                $this->addMedia($file)->toMediaCollection($category->value);
            }
        }
    }

    private function isValidImage(UploadedFile $file): bool
    {

        $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        if (! in_array($file->getClientOriginalExtension(), $allowedExtensions)) {
            return false;
        }

        $maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes
        if ($file->getSize() > $maxFileSize) {
            return false;
        }

        if (! in_array($file->getMimeType(), ['image/jpeg', 'image/png', 'image/gif'])) {
            return false;
        }

        return true;
    }
}
