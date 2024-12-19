<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use App\Models\Feature;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $userRole = Role::create(['name'=>RolesEnum::User->value]);
        $adminRole = Role::create(['name'=>RolesEnum::Admin->value]);
        $superadminRole = Role::create(['name'=>RolesEnum::SuperAdmin->value]);
        $employeeRole = Role::create(['name'=>RolesEnum::Employee->value]);
        $commenterRole = Role::create(['name'=>RolesEnum::Commenter->value]);
        $vetmanngerRole = Role::create(['name'=>RolesEnum::VetManager->value]);
        $doctorRole = Role::create(['name'=>RolesEnum::Doctor->value]);
        

        $manageFeaturePermission = Permission::create(
            [
                'name' => PermissionsEnum::ManageFeature->value
            ]
            );

        $manageCommentsPermission = Permission::create(
            [
                'name' => PermissionsEnum::ManageComments->value
            ]
            );

        $manageUsersPermission = Permission::create(
            [
                'name' => PermissionsEnum::ManageUsers->value
            ]
            );
        $upvoteDownvotePermission = Permission::create(
            [
                'name' => PermissionsEnum::UpvoteDownvote->value
            ]
            );

        $userRole->syncPermissions($upvoteDownvotePermission);
        $commenterRole -> syncPermissions([$commenterRole,$upvoteDownvotePermission]);
        $adminRole ->syncPermissions([$commenterRole,$upvoteDownvotePermission,$manageUsersPermission,$manageFeaturePermission]);     

        User::factory()->create([
            'name' => 'User User',
            'email' => 'user@example.com',
            'password' => '123456789',
        ])->assignRole(RolesEnum::User);

        User::factory()->create([
            'name' => 'Commenter User',
            'email' => 'Commenter@example.com',
            'password' => '123456789',
        ])->assignRole(RolesEnum::Commenter);

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => '123456789',
        ])->assignRole(RolesEnum::Admin);


        Feature:: factory(100)->create();
    }
}
