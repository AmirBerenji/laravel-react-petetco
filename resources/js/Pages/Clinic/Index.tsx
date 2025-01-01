import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Clinic } from "@/types/clinic";
import ClinicFirstTime from "@/Pages/Clinic/Partial/clinicFirstTime";
import ClinicInformation from "@/Pages/Clinic/Partial/clinicInformation";
import PrimaryButton from "@/Components/PrimaryButton";
import React, {useEffect, useState} from "react";
import ClinicsInformation from "@/Pages/Clinic/Partial/clinicsInformation";

export default function Index({ clinics }: { clinics: Clinic[] }) {
  return (
    <Authenticated>
      <Head title="Clinic and Branches" />

      {clinics.length === 1 ? (
        <>
          <Link href={route("clinic.create")} className="mb-3 inline-flex items-center rounded-md border border-transparent bg-[#7395AE] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300" >Add New Clinic</Link>
          {clinics.map((clinic) => (
            <ClinicInformation clinicInfo={clinic} key={clinic.id} />
          ))}
        </>
      ) : (
        <>
          <Link href={route("clinic.create")} className=" mb-3 inline-flex items-center rounded-md border border-transparent bg-[#7395AE] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300" >Add New Clinic</Link>

          <ClinicsInformation clinics={clinics} />
        </>
      )}
    </Authenticated>
  );
}
