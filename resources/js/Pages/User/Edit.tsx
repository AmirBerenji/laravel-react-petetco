import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Radio from "@/Components/Radio";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Show({ roles, user,roleLabels }: { roles: any; user: User;roleLabels:Record<string,string> }) {
  const { data, setData, processing, errors, put } = useForm({
    name: user.name,
    email: user.email,
    roles: user.roles,
    permissions: user.permissions,
  });

  const updateUser: FormEventHandler = (ev) => {
    ev.preventDefault();

    put(route("user.update", user.id), {
      preserveScroll: true,
    });
  };

  const onRoleChange = (ev:any) => {
    if(ev.target.checked){
      setData('roles',[ev.target.value])
    }

  }

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl leading-tight text-gray-800 dark:text-gray-200">
          Edit User <b>{user.name}</b>
        </h2>
      }
    >
      <Head title="Edit User" />

      <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">
          <form onSubmit={updateUser} className="w-full">
            <div className="mb-8">
              <InputLabel htmlFor="name" value="Name" />

              <TextInput
                id="name"
                className="mt-1 block w-full"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                required
                isFocused
                autoComplete="name"
              />

              <InputError className="mt-2" message={errors.name} />
            </div>

            <div className="mb-8">
              <InputLabel htmlFor="email" value="Email" />

              <TextInput
                id="email"
                disabled
                className="mt-1 block w-full"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                required
                isFocused
                autoComplete="email"
              />

              <InputError className="mt-2" message={errors.email} />
            </div>

            <div className="px-4 py-4">
              {roles.map((role: any) => (
                <div key={role.id} className="py-1" >
                  <Radio
                  name="roles"
                  checked={data.roles.includes(role.name)}
                  value={role.name}
                  onChange={onRoleChange} />
                  <span className="px-2" >{roleLabels[role.name]}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <PrimaryButton disabled={processing}>Save</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
