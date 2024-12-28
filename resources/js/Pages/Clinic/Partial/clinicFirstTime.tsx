import React, {FormEventHandler} from 'react'
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import {useForm} from "@inertiajs/react";

export default function ClinicFirstTime() {

  const{data,
    setData,
    processing,
    errors,
    post
  } = useForm({
    name:'',
    email:'',
    address:'',
    phone:''
  })


  const createClinic:FormEventHandler =(ev) =>{
    ev.preventDefault();

    post(route('clinic.store'),{
      preserveScroll:true
    })
  }

  return (
    <>
      <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">
          <section className="w-full ">
            <header>
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Clinic And Branches Information
              </h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Add first your clinic and branche
              </p>
            </header>

            <form  onSubmit={createClinic} className="w-full mt-8">
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
                <InputLabel value="Email"/>

                <TextInput
                  id="name"
                  className="mt-1 block w-full"
                  placeholder="Email of Clinic"
                  required
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  autoComplete="email"
                />

              </div>

              <div className="mb-2">
                <InputLabel value="Phone"/>

                <TextInput
                  id="name"
                  className="mt-1 block w-full"
                  placeholder="Phone of Clinic"
                  required

                  value={data.phone}
                  onChange={(e) => setData("phone", e.target.value)}
                  autoComplete="phone"
                />

              </div>

              <div className="mb-2">
                <InputLabel value="Address"/>

                <TextInput
                  id="name"
                  className="mt-1 block w-full"
                  placeholder="Address of Clinic"
                  required

                  value={data.address}
                  onChange={(e) => setData("address", e.target.value)}
                  autoComplete="address-level1"
                />
              </div>

              <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing} >Save</PrimaryButton>

              </div>
            </form>
          </section>
        </div>
      </div>

    </>
  )
}
