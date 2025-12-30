import React from "react";
import whyOutSourceUperImg from "../../../assets/images/serivePgsImg/WhyChooseUs/WhyChooseUs.png";
import BulletPoints from "./components/BulletPoints.jsx";

const Outsource = () => {
  return (
    <>
      <div className="flex justify-center lg:justify-evenly items-center mx-12 my-6 md:mx-24 md:my-12 flex-wrap lg:my-12">
        <div className="relative flex mt-6 w-80 h-70 md:w-140 md:h-120 items-center justify-center lg:justify-end overflow-hidden">
          <img
            src={whyOutSourceUperImg.src}
            alt="whyOutSourceUperImg"
            className="absolute inline-block rounded  ring-white z-50 left-0 lg:left-6"
          />
        </div>
        <div className="flex flex-col h-auto justify-center lg:items-start w-120 ">
          <h1 className="text-3xl font-semibold text-center pb-4">
            Why Choose Us for Your UK Annual Accounts?
          </h1>
          <BulletPoints />
        </div>
      </div>
    </>
  );
};
export default Outsource;
