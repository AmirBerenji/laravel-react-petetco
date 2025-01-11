import React from 'react'
import {Branch} from "@/types/branch";
import {Link} from "@inertiajs/react";
import {Clinic} from "@/types/clinic";
import {Inertia} from "@inertiajs/inertia";

export default function BranchList({branches,clinic}:{branches:Branch[],clinic:Clinic}) {


  function deleteBranch(clinicId: number, branchId: number) {
    if (confirm("Are you sure you want to delete this branch?")) {
      Inertia.delete(route("clinic.branch.destroy", { clinic: clinicId, branch: branchId }));
    }
  }

  function editBranch(clinicId: number, branchId: number) {

    Inertia.get(route("clinic.branch.edit",  { clinic: clinicId, branch: branchId }));
  }

  return (
    <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
      <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">
        <section className="w-full ">
          <header className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Edit your branch or Add new branch
            </h2>
            <Link href={route("clinic.branch.create",[clinic])}
                  className=" mb-3 inline-flex items-center rounded-md border border-transparent bg-[#7395AE] px-4
                  py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out
                  hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                  active:bg-gray-900 " >Add New Branch</Link>
          </header>


          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
              </thead>
              <tbody>

              {branches.map((branch) => (
                <tr key={branch.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {branch.name}
                  </th>
                  <td className="px-6 py-4">
                    {branch.phone}
                  </td>
                  <td className="px-6 py-4">
                    {branch.email}
                  </td>
                  <td className="px-6 py-4">
                    {branch.address}
                  </td>
                  <td className="items-end">
                    <Link
                      href={route("clinic.branch.edit",  [clinic, branch ])}

                          className="  inline-flex items-center rounded-md border border-transparent bg-orange-500 px-4
                  py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out
                  hover:bg-orange-700 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2
                  active:bg-orange-600 " >Edit Branch</Link>
                    <Link href={'#'}
                          onClick={()=>deleteBranch(clinic.id,branch.id)}
                          className=" ml-5 inline-flex items-center rounded-md border border-transparent bg-red-700 px-4
                  py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out
                  hover:bg-red-900 focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2
                  active:bg-red-600 " >Delete Branch</Link>
                  </td>
                </tr>
              ))}

              </tbody>
            </table>
          </div>


        </section>
      </div>
    </div>

  )
}
