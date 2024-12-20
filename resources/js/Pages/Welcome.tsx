import MainPic from "@/Components/General/MainPic";
import MainSection from "@/Components/MianPage/MainSection";
import WebLayout from "@/Layouts/WebLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Welcome() {
  const user = usePage().props.auth.user;

  return (
    <>
      <Head title="Welcome" />
      <WebLayout>
        <section className="w-full h-screen relative grid  bg-zinc-100  overflow-hidden z-0 ">
          <MainPic/>
        </section>
        <MainSection/>
      </WebLayout>
    </>
  );
}
