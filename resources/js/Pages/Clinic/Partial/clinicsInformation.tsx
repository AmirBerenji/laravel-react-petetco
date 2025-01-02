import {Clinic} from "@/types/clinic";
import ClinicInformation from "@/Pages/Clinic/Partial/clinicInformation";
import React from "react";

export default function ClinicsInformation({ clinics }: { clinics: Clinic[] }) {
  return (
    <>


      <div className="w-full">
        <div className="card">
          <div className="card-body">
            <h2 className="text-lg font-medium mt-2 mb-2 text-gray-900 dark:text-gray-100">
              The List of Clinics and Branches
            </h2>
            <div className="accordion accordion-flush" id="clinicAccordion">

              {clinics.map((clinic) => {
                const headingId = `heading-${clinic.id}`;
                const collapseId = `collapse-${clinic.id}`;

                return (
                  <div className="accordion-item" key={clinic.id}>
                    {/* Accordion Header */}
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="false"
                        aria-controls={collapseId}
                      >
                        {clinic.name}
                      </button>
                    </h2>

                    <div
                      id={collapseId}
                      className="accordion-collapse collapse"
                      aria-labelledby={headingId}
                      data-bs-parent="#clinicAccordion"
                    >
                      <ClinicInformation clinicInfo={clinic} key={clinic.id}/>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
