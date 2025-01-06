import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Clinic } from "@/types/clinic";
import {Link, router, useForm} from "@inertiajs/react";
import React, { FormEventHandler } from "react";
import BranchList from "@/Pages/Branch/Partial/branchList";
import InputError from "@/Components/InputError";
import {Inertia} from "@inertiajs/inertia";

export default function ClinicInformation({ clinicInfo }: { clinicInfo: Clinic }) {

  const { data, setData, processing, progress,errors, post } = useForm<Clinic>({
    banner: clinicInfo.banner,
    branches: clinicInfo.branches,
    logo: clinicInfo.logo,
    name: clinicInfo.name,
    id: clinicInfo.id,
  });

  const updateClinic: FormEventHandler = (ev) => {
    ev.preventDefault();

    data.logo = typeof data.logo === "string"
      ? null // Use the string URL directly
      : data.logo

    data.banner = typeof data.banner === "string"
      ? null // Use the string URL directly
      : data.banner

      router.post(`/clinic/${clinicInfo.id}`,{
        _method: 'put',
        banner: data.banner,
        logo: data.logo,
        name: data.name,
        id: data.id,
      });
  };

  function deleteClinic(id:number) {
    if (confirm("Are you sure you want to delete this clinic?")) {
      Inertia.delete(route("clinic.destroy", id));
    }
  }

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

            <form onSubmit={updateClinic} className="w-full mt-8" encType="multipart/form-data"  >
              {progress && (
                <progress value={progress.percentage} max="100">
                  {progress.percentage}%
                </progress>
              )}
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
                <InputLabel value="Logo"/>
                <InputError message={errors.logo} className="mt-2" />
                <div className="flex ml-5">
                  <input
                    className="hidden"
                    type="file"
                    id={`logo${clinicInfo.id.toString()}`}
                    onChange={(e) => handleFileChange(e, 'logo')}
                  />
                  <label htmlFor={`logo${clinicInfo.id.toString()}`}className="cursor-pointer">
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
                    id={`banner${clinicInfo.id.toString()}`}
                    onChange={(e) => handleFileChange(e, 'banner')}
                  />

                  <label htmlFor={`banner${clinicInfo.id.toString()}`} className="cursor-pointer">
                    <img
                      src={
                        typeof data.banner === "string"
                          ? data.banner // Use the string URL directly
                          : data.banner
                            ? URL.createObjectURL(data.banner) // Generate a URL for the File object
                            : ""}
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
                <Link
                  href="#"
                  onClick={() => deleteClinic(clinicInfo.id)}
                  className="inline-flex items-center rounded-md border border-transparent bg-red-700 px-4
              py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out
              hover:bg-red-900 focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2
              active:bg-red-600"
                >
                  Delete Clinic
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>

      <BranchList branches={clinicInfo.branches} clinic={clinicInfo}/>

    </>
  );
}
