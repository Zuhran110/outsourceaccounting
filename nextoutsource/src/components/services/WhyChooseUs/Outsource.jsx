"use client";
import React from "react";
import BulletPoints from "./components/BulletPoints.jsx";

const Outsource = ({ data }) => {
  return (
    <>
      <div className="flex justify-center lg:justify-evenly items-center mx-12 my-6 md:mx-24 md:my-12 flex-wrap lg:my-12">
        <div className="relative flex mt-6 w-80 h-70 md:w-140 md:h-120 items-center justify-center lg:justify-end overflow-hidden">
          <img
            src={data.img}
            alt="whyOutSourceUperImg"
            className="absolute inline-block rounded  ring-white z-50 left-0 lg:left-6"
          />
        </div>
        <div className="flex flex-col h-auto justify-center lg:items-start w-120 ">
          <h1 className="text-3xl font-semibold text-center pb-4">
            {data.heading}
          </h1>
          <BulletPoints data={data.whyChooseUscards} />
        </div>
      </div>
    </>
  );
};
export default Outsource;
