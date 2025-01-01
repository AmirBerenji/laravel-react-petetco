import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Clinic } from "@/types/clinic";
import { useForm } from "@inertiajs/react";
import React, { FormEventHandler } from "react";
import BranchList from "@/Pages/Clinic/Partial/branchList";
import {FirstClinicType} from "@/types/firstClinicType";

export default function ClinicInformation({ clinicInfo }: { clinicInfo: Clinic }) {

  const { data, setData, processing, errors, post } = useForm<Clinic>({
    banner: clinicInfo.banner,
    branches: clinicInfo.branches,
    logo: clinicInfo.logo,
    name: clinicInfo.name,
    id: clinicInfo.id,
  });


  const createClinic: FormEventHandler = (ev) => {
    ev.preventDefault();

    post(route("clinic.update"), {
      preserveScroll: true,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Clinic) => {
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
                Clinic And Branches Information : {clinicInfo.name}
              </h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Edit your clinic and Add new branche
              </p>
            </header>

            <form className="w-full mt-8">
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
                <InputLabel value="Logo"/>
                <div className="flex ml-5">
                  <input
                    className="hidden"
                    type="file"
                    id="logo"
                    onChange={(e) => handleFileChange(e, 'logo')}
                  />
                  <label htmlFor="logo" className="cursor-pointer">
                    <img
                      src={
                        typeof data.logo === "string"
                          ? data.logo // Use the string URL directly
                          : data.logo
                            ? URL.createObjectURL(data.logo) // Generate a URL for the File object
                            : ""
                      }
                      width="120"
                      height="120"
                      alt="hero 1"
                      className="rounded-md border border-1 border-gray-200 "
                    />
                  </label>
                </div>
              </div>

              <div className="mb-2">
                <InputLabel value="Banner"/>
                <div className="flex ml-5">
                  <input
                    className="hidden"
                    type="file"
                    id="banner"
                    onChange={(e) => handleFileChange(e, 'banner')}
                  />
                  <label htmlFor="banner" className="cursor-pointer">
                    <img
                      src={
                        typeof data.banner === "string"
                          ? data.banner // Use the string URL directly
                          : data.banner
                            ? URL.createObjectURL(data.banner) // Generate a URL for the File object
                            : ""
                      }
                      width={600}
                      height={560}
                      alt="hero 1"
                      className="rounded-md border border-1 border-gray-200"
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Edit</PrimaryButton>
              </div>
            </form>
          </section>
        </div>
      </div>

      <BranchList branches={clinicInfo.branches}/>

    </>
  );
}
