import WebLayout from "@/Layouts/WebLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Welcome() {
  const user = usePage().props.auth.user;

  return (
    <>
      <Head title="Welcome" />
      <WebLayout>
        <section className="w-full h-screen relative grid  bg-zinc-100  overflow-hidden z-0 ">
          <div>
            <img
              src="images/banner/circelPink.png"
              width="560"
              height="560"
              alt="hero 1"
              className="absolute top-0 left-32"
            />
            <img
              src="images/banner/circulePurpel.png"
              width="800"
              height="800"
              alt="hero 1"
              className="z-0 absolute -bottom-14 lg:right-56 right-2 "
            />
            <img
              src="images/banner/dogBanner.png"
              loading="lazy"
              width="744"
              height="900"
              alt="hero 1"
              className=" z-10 absolute -bottom-16 lg:right-56 right-2 "
            />
          </div>
        </section>

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
              <h2 className="font-bold text-xl uppercase">MENTALLY HEALTHY</h2>
              <p className="text-justify text-lg mt-5">
                For many people, especially those who are lonely, having a pet
                can be a valuable source of comfort and company. Renting a pet
                gives lonely people the opportunity to enjoy the presence and
                love of a pet, which can significantly increase their mood and
                well-being at such a difficult time.
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
                animal socialization
              </h2>
              <p className="text-justify text-lg mt-5">
                Many pets need to socialize and interact with people and other
                animals to be happy and healthy. Renting pets also helps those
                animals that are looking for a permanent home. While they are on
                rent, they receive care, attention and the opportunity to show
                their best qualities to potential adopters. This can
                significantly increase the chances of their successful
                adaptation and a happy life in a new home.
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
              <h2 className="font-bold text-xl uppercase">convenience</h2>
              <p className="text-justify text-lg mt-5">
                You choose your own rental period and schedule, convenient for
                you. All you need is to pick up your pet and enjoy a temporary
                companion. Renting allows you to enjoy the wonderful world of
                animals. You can gain valuable experience and understand whether
                a particular animal species suits you.
              </p>
            </div>
          </div>
        </section>
      </WebLayout>
    </>
  );
}
