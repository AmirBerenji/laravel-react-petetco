import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Button } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, useState } from "react";
export default function WebLayout({ children }: PropsWithChildren) {
  const user = usePage().props.auth.user;
  const success: any = usePage().props.success;
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="w-full bg-slate-100 min-h-screen grid col-span-2 ">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.png" className="w-12" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PetetCo
            </span>
          </Link>

          <button
            className="sm:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() =>
              setShowingNavigationDropdown(!showingNavigationDropdown)
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div className="hidden space-x-8 sm:flex">
            <NavLink
              prefetch={["mount", "hover"]}
              href={route("dashboard")}
              active={route().current("dashboard")}
            >
              Pet Store
            </NavLink>
            <NavLink
              prefetch={["mount", "hover"]}
              href={route("feature.index")}
              active={route().current("feature.index")}
            >
              Vet
            </NavLink>
            <NavLink
              prefetch={["mount", "hover"]}
              href={route("feature.index")}
              active={route().current("feature.index")}
            >
              Blogs
            </NavLink>
            <NavLink
              prefetch={["mount", "hover"]}
              href={route("feature.index")}
              active={route().current("feature.index")}
            >
              Contact Us
            </NavLink>
            <NavLink
              prefetch={["mount", "hover"]}
              href={route("feature.index")}
              active={route().current("feature.index")}
            >
              About Us
            </NavLink>
          </div>
            
          <div className="gap-3 hidden space-x-8 sm:flex  ">
            <Link href={route('login')} className="bg-green-200 text-center  px-2 rounded-lg py-2 w-20 text-sm border border-gray-400 text-gray-700">
              Sign in
            </Link>
            <Link href={route('register')} className=" text-center px-2 rounded-lg py-2 w-20 text-sm border border-gray-400 text-gray-700">
              Sign up
            </Link>
          </div>
        </div>

        {showingNavigationDropdown && (
          <div className="sm:hidden bg-white dark:bg-gray-900">
            <div className="space-y-2 p-4 border-t border-gray-200 dark:border-gray-700">
              <ResponsiveNavLink
                prefetch={["mount", "hover"]}
                href={route("dashboard")}
                active={route().current("dashboard")}
                className="w-full"
              >
                Dashboard
              </ResponsiveNavLink>
              <ResponsiveNavLink
                prefetch={["mount", "hover"]}
                href={route("feature.index")}
                active={route().current("feature.index")}
                className="w-full"
              >
                Features
              </ResponsiveNavLink>
            </div>

            <div className=" flex gap-3 ">
              <Button className="bg-green-200 px-2 rounded-lg py-2 w-20 text-sm border border-gray-400 text-gray-700">
                Sign in
              </Button>
              <Button className=" px-2 rounded-lg py-2 w-20 text-sm border border-gray-400 text-gray-700">
                Sign up
              </Button>
            </div>
          </div>
        )}
      </nav>
      <div className="mt-16 pt-3">{children}</div>
    </div>
  );
}
