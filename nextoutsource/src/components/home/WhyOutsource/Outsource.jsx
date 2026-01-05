"use client";
import { useState } from "react";
import whyOutSourceAccounting from "@/assets/images/WhyOutsourceAccounting/whyOutSourceAccounting.png";
import whyOutSourceUperImg from "@/assets/images/WhyOutsourceAccounting/whyOutSourceUperImg.png";
import BulletPoints from "./components/BulletPoints.jsx";
import QuoteButton from "@/components/shared/buttons/QuoteButton.jsx";
import QuoteForm from "@/components/shared/forms/QuoteForm.jsx";
import Model from "@/components/shared/forms/Model.jsx";

const Outsource = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center lg:justify-evenly items-center mx-12 my-6 md:mx-24 md:my-12 flex-wrap lg:my-12">
        <div className="flex flex-col h-auto justify-center lg:items-start w-120 ">
          <h1 className="text-3xl font-semibold text-center pb-4">
            Why Outsource Accounting
          </h1>
          <p className="my-2 font-light">
            You’ve got a team behind you! Our expert team of budget-friendly
            online accountants is set and raring to provide you with the
            one-on-one expert support your business deserves. Whether you’re
            just kicking off, running a tight ship, or a seasoned pro, we are
            locked and loaded to guide you through the complexities of UK
            accounting and tax filing. With our hands- on vibe, we make sure
            you’re savvy enough to make sound financial moves. Cheers to your
            success!
          </p>
          <BulletPoints />
          <div>
            <QuoteButton onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
        <div className="relative flex mt-6 w-80 h-70 md:w-140 md:h-120 items-center justify-center lg:justify-end overflow-hidden">
          <img
            src={whyOutSourceUperImg.src}
            alt="whyOutSourceUperImg"
            className="absolute inline-block h-50 w-50 md:h-80 md:w-80 rounded  ring-white z-50 left-0 lg:left-6"
          />
          <img
            src={whyOutSourceAccounting.src}
            alt="whyOutSourceAccounting"
            className="absolute inline-block h-60 w-60 md:h-90 md:w-90 rounded ring-white right-1"
          />
        </div>
        {/* MODAL OVERLAY */}
        <Model isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left text-gray-800">
            Quick <span className="text-(--color-buttonBlue)">Quote</span>
          </h2>
          <QuoteForm onSuccess={() => setIsModalOpen(false)} />
        </Model>
      </div>
    </>
  );
};
export default Outsource;
