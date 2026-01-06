"use client";
import { useState } from "react";
import ServiceCards from "./ServiceComponents/ServiceCards.jsx";
import QuoteButton from "@/components/shared/buttons/QuoteButton.jsx";
import Model from "@/components/shared/forms/Model.jsx";
import QuoteForm from "@/components/shared/forms/QuoteForm.jsx";

const Services = () => {
  const [isModelOpen, setisModelOpen] = useState(false);
  return (
    <section
      className="flex flex-col self-center items-center content-center justify-center text-black bg-white lg:my-12 mx-3 md:mx-12 lg:mx-20"
      id="services"
    >
      <div className="flex flex-col self-center items-center content-center justify-center align-middle text-black bg-white flex-wrap">
        <h2 className="text-[2rem] font-semibold mb-4 w-full text-center text-[#4632DA] ">
          Services
        </h2>
        <p className="text-[1rem] font-normal mb-8 w-7/9 text-start md:text-center text-[#333333]">
          Welcome to our all-inclusive professional Accountancy service
          portfolio, designed to satisfy the various financial requirements of
          individuals, partnerships, limited liability programs, sole traders,
          and limited corporations across the United Kingdom. Our expert team
          works tirelessly to ensure the financial success of organisations We
          offer a comprehensive range of services designed to simplify and
          manage your tax responsibilities.
        </p>
        <ServiceCards />
      </div>
      <div className="mt-3">
        <QuoteButton onClick={() => setisModelOpen(true)} />
      </div>
      <Model isOpen={isModelOpen} onClose={() => setisModelOpen(false)}>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left text-gray-800">
          Quick <span className="text-(--color-buttonBlue)">Quote</span>
        </h2>
        <QuoteForm onSuccess={() => setisModelOpen(false)} />
      </Model>
    </section>
  );
};

export default Services;
