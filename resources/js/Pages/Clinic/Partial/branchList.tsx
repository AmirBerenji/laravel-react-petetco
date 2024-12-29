import React from 'react'
import {Branch} from "@/types/branch";
import PrimaryButton from "@/Components/PrimaryButton";

export default function BranchList({branches}:{branches:Branch[]}) {
  return (
    <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
      <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">
        <section className="w-full ">
          <header className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Edit your branch or Add new branch
            </h2>
            <PrimaryButton className="w-36">New Branch</PrimaryButton>
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
                    <PrimaryButton
                      className="w-20 bg-orange-600 justify-center mr-5 hover:bg-orange-900 ">Edit</PrimaryButton>
                    <PrimaryButton
                      className="w-20 bg-red-600 justify-center mr-5 hover:bg-red-900 ">Delete</PrimaryButton>
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
