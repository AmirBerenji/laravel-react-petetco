import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Clinic } from "@/types/clinic";
import ClinicFirstTime from "@/Pages/Clinic/Partial/clinicFirstTime";
import ClinicEdit from "@/Pages/Clinic/Partial/clinicEdit";

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
              <ClinicEdit clinic={cli} />
            </>
          ))}
        </>
      )}
    </Authenticated>
  );
}
