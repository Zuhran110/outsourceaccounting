"use client";

import { useState } from "react";
import Group from "../../../assets/images/OutSourseHero/BookaCallImg/Group.png";
import ContectForm from "@/components/shared/forms/contactForm/ContectForm";
import Modeltwo from "@/components/shared/forms/Modeltwo";

const BookACall = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="my-6 lg:my-12 mx-6 md:mx-12 flex justify-between flex-col md:flex-row bg-purple-50 p-6 md:p-12 lg:p-16">
      <div className=" flex flex-col gap-6">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl my-2 md:my-3 text-center lg:text-start ">
          Book a 1 - on - 1 Call
        </h1>
        <p className="font-light max-w-140 text-center md:text-start">
          Have questions or need personalized support? Our team is here to help
          you every step of the way—don't hesitate to reach out!
        </p>
        <p
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-200 p-2 text-center lg:p-4 max-w-48 rounded-2xl cursor-pointer"
        >
          Book free 30 Min Now
        </p>
      </div>
      <div>
        <img src={Group.src} alt="" className="p-2" />
      </div>
      <Modeltwo isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContectForm onSuccess={() => setIsModalOpen(false)} />
      </Modeltwo>
    </div>
  );
};
export default BookACall;
