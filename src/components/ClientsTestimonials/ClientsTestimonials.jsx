import React, { useRef } from "react";
import Cards from "./components/Cards";

import { arrow } from "../../assets/images/ClientsTestimonials/CTimg.js";

const ClientsTestimonials = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className="px-4 py-12 md:px-12 w-full bg-gray-50">
      <div className="relative flex flex-col md:flex-row items-center justify-center mb-12">
        <h1 className="font-bold text-3xl text-center text-gray-800">
          Clients testimonials
        </h1>

        <div className="hidden md:flex absolute right-0 gap-4">
          <button
            onClick={scrollLeft}
            className="h-auto w-auto rounded-full hover:bg-gray-200 transition-colors bg-white"
          >
            <img src={arrow} alt="Previous" className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={scrollRight}
            className="h-auto w-auto rounded-full hover:bg-gray-200 transition-colors bg-white"
          >
            <img src={arrow} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Cards ref={sliderRef} />
    </div>
  );
};

export default ClientsTestimonials;
