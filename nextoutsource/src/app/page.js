import Image from "next/image";
import Hero from "../components/home/Hero/Hero.jsx";
import WhyOutsource from "@/components/home/WhyOutsource/Outsource.jsx";
import Services from "@/components/home/Services/Services.jsx";
import HowWeWork from "@/components/home/HowWeWork/HowWeWork.jsx";
import JoinUs from "@/components/home/JoinUs/JoinUs.jsx";
import ClientsTestimonials from "@/components/home/ClientsTestimonials/ClientsTestimonials.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyOutsource />
      <Services />
      <HowWeWork />
      <JoinUs />
      <ClientsTestimonials />
    </>
  );
}
