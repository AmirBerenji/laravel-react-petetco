import MainPic from "@/Components/General/MainPic";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <>
      <Head title="Register" />
      <section className="w-full h-screen relative grid  bg-zinc-100  overflow-hidden z-0 ">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden z-50">
          <div className="w-full m-auto bg-white rounded-md shadow-xl lg:max-w-xl p-6   ">
            <Link href="/" className="flex items-center mb-6   ">
              <img
                className="h-10 w-10 m-auto -mb-5"
                src="/images/logo.png"
                alt="Pet Managment"
              />
            </Link>
            <h1 className="text-3xl font-semibold text-center text-[#7395AE] uppercase">
              Sign up
            </h1>
            <form onSubmit={submit}>
              <div>
                <InputLabel htmlFor="name" value="Name" />

                <TextInput
                  id="name"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  autoComplete="name"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                  required
                />

                <InputError message={errors.name} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  autoComplete="username"
                  onChange={(e) => setData("email", e.target.value)}
                  required
                />

                <InputError message={errors.email} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  autoComplete="new-password"
                  onChange={(e) => setData("password", e.target.value)}
                  required
                />

                <InputError message={errors.password} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="password_confirmation"
                  value="Confirm Password"
                />

                <TextInput
                  id="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-1 block w-full"
                  autoComplete="new-password"
                  onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                  }
                  required
                />

                <InputError
                  message={errors.password_confirmation}
                  className="mt-2"
                />
              </div>

              <div className="mt-4 flex items-center justify-end">
                
                <PrimaryButton className="w-full bg-[#7395AE] justify-center " disabled={processing}>
                  Register
                </PrimaryButton>
              </div>
            </form>

            <div className="mt-2">
              <p className="mt-5 text-xs font-light text-center text-gray-700">
                <Link
                  href={route('login')}
                  className="text-xs text-[#7395AE]   hover:underline"
                >
                  I have an account!
                </Link>
              </p>
            </div>
          </div>
        </div>

        <MainPic className="opacity-40" />
      </section>
    </>
  );
}
