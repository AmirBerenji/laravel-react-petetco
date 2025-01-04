<?php

namespace App\Traits;

trait UploadImageTrait
{
    public function handleImages(array $files, bool $edit = false): void
    {
        foreach ($files as $key => $file) {
            if ($edit) {
                $this->editImage($file, $key);
            } else {
                $this->uploadImage($file, $key);
            }
        }
    }
}
