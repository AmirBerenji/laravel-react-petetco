import React, { FormEventHandler } from 'react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {FirstClinicType} from "@/types/firstClinicType";
import InputError from "@/Components/InputError";

// Define the form data type explicitly

export default function ClinicFirstTime() {
  const { data, setData, processing, errors,post } = useForm<FirstClinicType>({
    name: '',
    email: '',
    address: '',
    phone: '',
    logo: null,
    banner: null
  });

  const createClinic: FormEventHandler = (ev) => {
    ev.preventDefault();
    post(route('clinic.store'), {
      preserveScroll: true,
      preserveState: true,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FirstClinicType) => {
    const file = e.target.files?.[0];
    if (file) {
      setData(field, file);
    }
  };

  return (
    <>
      <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">
          <section className="w-full ">
            <header>
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Clinic And Branches Information
              </h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Add first your clinic and branch
              </p>
            </header>

            <form onSubmit={createClinic} className="w-full mt-8" encType="multipart/form-data">
              <div className="mb-2">
                <InputLabel htmlFor="name" value="Name" />
                <InputError message={errors.name} className="mt-2" />
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
                <InputLabel value="Email" />
                <InputError message={errors.email} className="mt-2" />
                <TextInput
                  id="email"
                  className="mt-1 block w-full"
                  placeholder="Email of Clinic"
                  required
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div className="mb-2">
                <InputLabel value="Phone" />
                <InputError message={errors.phone} className="mt-2" />
                <TextInput
                  id="phone"
                  className="mt-1 block w-full"
                  placeholder="Phone of Clinic"
                  required
                  value={data.phone}
                  onChange={(e) => setData("phone", e.target.value)}
                  autoComplete="phone"
                />
              </div>

              <div className="mb-2">
                <InputLabel value="Address" />
                <InputError message={errors.address} className="mt-2" />
                <TextInput
                  id="address"
                  className="mt-1 block w-full"
                  placeholder="Address of Clinic"
                  required
                  value={data.address}
                  onChange={(e) => setData("address", e.target.value)}
                  autoComplete="address-level1"
                />
              </div>

              <div className="mb-2">
                <InputLabel value="Logo" />
                <InputError message={errors.logo} className="mt-2" />
                <div className="flex justify-left ml-5 mt-2">
                  <input
                    className="hidden"
                    type="file"
                    id="logo"
                    onChange={(e) => handleFileChange(e, 'logo')}
                  />
                  <label htmlFor="logo" className="cursor-pointer">
                    <img
                      src={data.logo ? URL.createObjectURL(data.logo) : "../images/dashboard/sampleLogo.jpg"}
                      width="120"
                      height="120"
                      alt="hero 1"
                      className="rounded-md border border-1 border-gray-200 "
                    />
                  </label>
                </div>
              </div>

              <div className="mb-2">
                <InputLabel value="Banner" />
                <InputError message={errors.banner} className="mt-2" />
                <div className="flex justify-left ml-5 mt-2">
                  <input
                    className="hidden"
                    type="file"
                    id="banner"
                    onChange={(e) => handleFileChange(e, 'banner')}
                  />
                  <label htmlFor="banner" className="cursor-pointer">
                    <img
                      src={data.banner ? URL.createObjectURL(data.banner) : "../images/dashboard/banner.jpg"}
                      width="600"
                      height="560"
                      alt="hero 1"
                      className="rounded-md border border-1 border-gray-200"
                    />
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Save</PrimaryButton>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
