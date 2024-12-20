import React from "react";

export default function MainSection() {
  return (
    <>
      <section className="w-full border-t-8 border-t-[#F2968F] py-10">
        <div className="container grid grid-cols-1 lg:grid-cols-3 mx-auto px-10 lg:px-40 items-center">
          <div className="col-span-1 relative">
            <img
              src="images/section1/main.png"
              width="300"
              height="300"
              alt="hero 1"
              className=""
            />
            <img
              src="images/section1/number.png"
              width="100"
              height="100"
              alt="hero 1"
              className="z-10 absolute top-0"
            />
          </div>
          <div className="col-span-1 lg:col-span-2 items-center flex-1 lg:px-28">
            <h2 className="font-bold text-xl uppercase">
              Your Trusted Pet Care Companion
            </h2>
            <p className="text-justify text-lg mt-5">
              PetetCo is your ultimate solution for managing pet care with ease
              and confidence. Designed for pet owners, veterinarians, and pet
              shops, our platform connects you to trusted professionals and
              services, making pet management simpler than ever. Whether you
              need expert advice, quality pet products, or reliable care,
              PetetCo is here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full  py-10">
        <div className="container grid grid-cols-1 lg:grid-cols-3 mx-auto px-10 lg:px-40 items-center">
          <div className="col-span-1 relative block  xl:hidden lg:hidden ">
            <img
              src="images/section2/main.png"
              width="300"
              height="300"
              alt="hero 1"
              className=""
            />
            <img
              src="images/section2/number.png"
              width="100"
              height="100"
              alt="hero 1"
              className="z-10 absolute top-0"
            />
          </div>

          <div className="col-span-1 lg:col-span-2 items-center flex-1 lg:px-28">
            <h2 className="font-bold text-xl uppercase">
              Simplify Your Pet Care Journey with PetetCo
            </h2>
            <p className="text-justify text-lg mt-5">
              With PetetCo, you can effortlessly find experienced veterinarians,
              schedule appointments, and access a wide range of pet supplies.
              Our platform ensures that every aspect of pet care is streamlined
              and stress-free, giving you more time to enjoy the moments that
              matter with your furry friends.
            </p>
          </div>

          <div className="col-span-1 relative hidden xl:block lg:block ">
            <img
              src="images/section2/main.png"
              width="300"
              height="300"
              alt="hero 1"
              className=""
            />
            <img
              src="images/section2/number.png"
              width="100"
              height="100"
              alt="hero 1"
              className="z-10 absolute top-0"
            />
          </div>
        </div>
      </section>

      <section className="w-full  py-10">
        <div className="container grid grid-cols-1 lg:grid-cols-3 mx-auto px-10 lg:px-40 items-center">
          <div className="col-span-1 relative">
            <img
              src="images/section3/main.png"
              width="300"
              height="300"
              alt="hero 1"
              className=""
            />
            <img
              src="images/section3/number.png"
              width="100"
              height="100"
              alt="hero 1"
              className="z-10 absolute top-0"
            />
          </div>
          <div className="col-span-1 lg:col-span-2 items-center flex-1 lg:px-28">
            <h2 className="font-bold text-xl uppercase">
              Join the PetetCo Community Today
            </h2>
            <p className="text-justify text-lg mt-5">
              At PetetCo, we believe in creating a community where pets come
              first. From exclusive deals to tailored solutions for pet owners
              and professionals, our platform is your go-to hub for all things
              pet-related. Sign up today and experience the joy of effortless
              pet management with PetetCo!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
