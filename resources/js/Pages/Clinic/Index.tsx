import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Clinic } from "@/types/clinic";
import ClinicFirstTime from "@/Pages/Clinic/Partial/clinicFirstTime";
import ClinicInformation from "@/Pages/Clinic/Partial/clinicInformation";

export default function Index({ clinic }: { clinic: Clinic[] }) {
  return (
    <Authenticated>
      <Head title="Clinic and Branches" />

      {clinic.length <= 0 ? (
        <ClinicFirstTime />
      ) : (
        <>
          {clinic.map((cli) => (
            <>
              <ClinicInformation clinic={cli} />
            </>
          ))}
        </>
      )}
    </Authenticated>
  );
}
