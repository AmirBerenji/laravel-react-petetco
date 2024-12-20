<?php

namespace App\Enum;

enum RolesEnum: string
{
    case SuperAdmin = 'super_admin';
    case Admin = 'admin';
    case VetManager = 'vet_mannager';
    case Doctor = 'doctor';
    case Employee = 'employee';
    case Commenter = 'commenter';
    case User = 'user';

    public static function labels(): array
    {
        return [
            self::Admin->value => 'Admin',
            self::SuperAdmin->value => 'SuperAdmin',
            self::VetManager->value => 'VetManager',
            self::Doctor->value => 'Doctor',
            self::Employee->value => 'Employee',
            self::Commenter->value => 'Commenter',
            self::User->value => 'User',
        ];
    }

    public function label()
    {
        return match ($this) {
            self::Admin => 'Admin',
            self::SuperAdmin => 'SuperAdmin',
            self::VetManager => 'VetManager',
            self::Doctor => 'Doctor',
            self::Employee => 'Employee',
            self::Commenter => 'Commenter',
            self::User => 'User',
        };
    }
}
