import React, {FormEventHandler} from 'react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import {Head, useForm} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Branch} from "@/types/branch";
import {Clinic} from "@/types/clinic";

export default function Create({clinic}: { clinic: Clinic }) {

  const {data, setData, processing, post} = useForm<Branch>({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const createBranch: FormEventHandler = (ev) => {
    ev.preventDefault();
    post(route('clinic.branch.store', {clinic: clinic}), {
      preserveScroll: true,
      preserveState: true,
    });
  };


  return (
    <>
      <Authenticated>
        <Head title="Create New Branches"/>
        <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
          <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">
            <section className="w-full ">
              <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Branches Information
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Add new branch
                </p>
              </header>

              <form onSubmit={createBranch} className="w-full mt-8" encType="multipart/form-data">
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
