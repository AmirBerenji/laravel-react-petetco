<?php

namespace App\Traits;

use App\Models\Clinic;

trait UploadImageTrait
{
    public function handleImages(Clinic $clinic, array $files, bool $edit = false): void
    {
        foreach ($files as $key => $file) {
            if ($edit) {
                $clinic->editImage($file, $key);
            } else {
                $clinic->uploadImage($file, $key);
            }
        }
    }
}
