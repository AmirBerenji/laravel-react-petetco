import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Clinic } from "@/types/clinic";
import ClinicFirstTime from "@/Pages/Clinic/Partial/clinicFirstTime";
import ClinicInformation from "@/Pages/Clinic/Partial/clinicInformation";
import PrimaryButton from "@/Components/PrimaryButton";
import React, {useEffect, useState} from "react";
import ClinicsInformation from "@/Pages/Clinic/Partial/clinicsInformation";

export default function Create() {

  return (
    <Authenticated>

      <Head title="Clinic and Branchesasdadasdasd" />
        <ClinicFirstTime />
    </Authenticated>
  )
    ;
}
