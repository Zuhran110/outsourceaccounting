"use client";
import React, { useEffect, useRef, useState } from "react";
import Cards from "./components/Cards";
import arrow from "../../../assets/images/ClientsTestimonials/arrow.png";
import testimonial from "@/lib/data/homepage/testimonial";

const ClientsTestimonials = () => {
  const [testimonialContent, setTestimonialContent] = useState(null);

  const getData = async () => {
    const res = await testimonial();
    setTestimonialContent(res.data.clientsTestimonial);
  };

  useEffect(() => {
    getData();
  }, []);

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

  if (!testimonialContent) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="px-4 py-14 md:px-22 w-full ">
      <div className="relative flex flex-col md:flex-row items-center justify-center mb-12">
        <h1 className="font-bold text-3xl text-center bg-linear-to-l from-blue-600 to-black bg-clip-text text-transparent">
          {testimonialContent.heading}
        </h1>

        <div className="hidden md:flex absolute right-0 gap-4">
          <button
            onClick={scrollLeft}
            className="h-auto w-auto rounded-full hover:bg-gray-200 transition-colors bg-white"
          >
            <img
              src={arrow.src}
              alt="Previous"
              className="w-6 h-6 rotate-180"
            />
          </button>
          <button
            onClick={scrollRight}
            className="h-auto w-auto rounded-full hover:bg-gray-200 transition-colors bg-white"
          >
            <img src={arrow.src} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Cards ref={sliderRef} />
    </div>
  );
};

export default ClientsTestimonials;
