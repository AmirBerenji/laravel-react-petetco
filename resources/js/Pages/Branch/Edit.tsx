import {Branch} from "@/types/branch";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, router, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import React, {FormEventHandler} from "react";
import {Clinic} from "@/types/clinic";
import InputError from "@/Components/InputError";

export default function Edit({clinic,branch}: {clinic:Clinic, branch: Branch }) {

  const { data, setData, processing, put, errors } = useForm<Branch>({
    id: branch.id,
    name: branch.name,
    email: branch.email,
    address: branch.address,
    phone: branch.phone,
    clinic: clinic
  });

  const editBranch: FormEventHandler = (ev) => {
    ev.preventDefault();
    put(`/clinic/${clinic.id}/branch/${branch.id}`);
  };


  return (
    <>
      <Authenticated>
        <Head title="Edit Branche"/>
        <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
          <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">
            <section className="w-full ">
              <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Branches Information
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">

                  Edit branch:
                  <span  className="font-bold" >
                    {branch.name}
                  </span>
                </p>
              </header>

              <form onSubmit={editBranch} className="w-full mt-8" encType="multipart/form-data">
                <div className="mb-2">
                  <InputLabel htmlFor="name" value="Name"/>
                  <TextInput
                    id="name"
                    className="mt-1 block w-full"
                    placeholder="Name"
                    required
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    autoComplete="name"
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mb-2">
                  <InputLabel value="Email"/>
                  <TextInput
                    id="email"
                    className="mt-1 block w-full"
                    placeholder="Email"
                    required
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    autoComplete="email"
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mb-2">
                  <InputLabel value="Phone"/>
                  <TextInput
                    id="phone"
                    className="mt-1 block w-full"
                    placeholder="Phone"
                    required
                    value={data.phone}
                    onChange={(e) => setData("phone", e.target.value)}
                    autoComplete="phone"
                  />
                  <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mb-2">
                  <InputLabel value="Address"/>
                  <TextInput
                    id="address"
                    className="mt-1 block w-full"
                    placeholder="Address"
                    required
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                    autoComplete="address-level1"
                  />
                  <InputError message={errors.address} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                  <PrimaryButton disabled={processing}>Save</PrimaryButton>
                </div>
              </form>
            </section>
          </div>
        </div>
      </Authenticated>
    </>
  );

}
