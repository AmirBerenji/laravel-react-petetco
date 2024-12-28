import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Clinic } from "@/types/clinic";
import { useForm } from "@inertiajs/react";
import React, { FormEventHandler } from "react";

export default function ClinicEdit({ clinic }: { clinic: Clinic }) {

  const { data, setData, processing, errors, post } = useForm({
    name: clinic.name,
    id: clinic.id,
  });

  const createClinic: FormEventHandler = (ev) => {
    ev.preventDefault();

    post(route("clinic.update"), {
      preserveScroll: true,
    });
  };

  console.log(clinic);

  return (
    <>
      <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">
          <section className="w-full ">
            <header>
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Clinic And Branches Information : {clinic.name}
              </h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Edit your clinic and Add new branche
              </p>
            </header>

            <form className="w-full mt-8">
              <div className="mb-2">
                <InputLabel htmlFor="name" value="Name" />

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

              <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Edit</PrimaryButton>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
