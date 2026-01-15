"use client";
import { useEffect, useState } from "react";
import ServiceCards from "./ServiceComponents/ServiceCards.jsx";
import QuoteButton from "@/components/shared/buttons/QuoteButton.jsx";
import Model from "@/components/shared/forms/Model.jsx";
import QuoteForm from "@/components/shared/forms/QuoteForm.jsx";
import serviceData from "@/lib/data/homepage/serviceData.js";

const Services = () => {
  const [isModelOpen, setisModelOpen] = useState(false);
  const [serviceContent, setServiceContent] = useState(null);

  const getData = async () => {
    const res = await serviceData();
    setServiceContent(res.data.service);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!serviceContent) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <section
      className="flex flex-col self-center items-center content-center justify-center text-black bg-white lg:my-12 mx-3 md:mx-12 lg:mx-20"
      id="services"
    >
      <div className="flex flex-col self-center items-center content-center justify-center align-middle text-black bg-white flex-wrap">
        <h2 className="text-[2rem] font-semibold mb-4 w-full text-center text-[#4632DA] ">
          {`${serviceContent.heading}`}
        </h2>
        <p className="text-[1rem] font-normal mb-8 w-7/9 text-start md:text-center text-[#333333]">
          {`${serviceContent.description}`}
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
