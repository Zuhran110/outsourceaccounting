import React from "react";
import CompanyIcon from "@/assets/images/HowWeWork/chooseYourService.svg";
import document from "@/assets/images/HowWeWork/documents.svg";
import circlefill from "@/assets/images/HowWeWork/circlefill.svg";
import LineOne from "@/assets/images/HowWeWork/Lineone.svg";
import Linetwo from "@/assets/images/HowWeWork/Linetwo.svg";

const HowWeWork = () => {
  return (
    <div className="px-6 py-12 w-full">
      <h1 className="text-center font-bold text-3xl mb-16 text-gray-800">
        How We Work
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-4 gap-y-2 mx-auto w-full lg:w-5xl font-light items-start">
        <div className="relative flex flex-col text-center bg-white rounded-2xl h-full ">
          <p
            alt="Submission Icon"
            className="absolute w-8 h-8 border rounded-full border-gray-300 bg-gray-200 text-center items-center justify-center font-light  object-contain"
          >
            1
          </p>
          <img
            src={CompanyIcon.src}
            alt="Service Icon"
            className="w-2/3 aspect-square max-w-50 border rounded-full border-gray-600 shadow-2xl p-8 mb-6 object-contain self-center"
          />

          <h2 className="font-semibold mb-3 text-lg ">Choose Your Service</h2>
          <p className="text-gray-600">
            Select the service you need online, enter your details and complete
            the payment.
          </p>
        </div>
        <img src={Linetwo.src} alt="" className="my-8 hidden md:inline-block" />
        {/* Card 2 */}
        <div className="relative flex flex-col text-center bg-white rounded-2xl h-full ">
          <p
            alt="Submission Icon"
            className="absolute w-8 h-8 border rounded-full border-gray-300 bg-gray-200 text-center items-center justify-center font-light  object-contain"
          >
            2
          </p>
          <img
            src={document.src}
            alt="Info Icon"
            className="w-2/3 aspect-square max-w-50 border rounded-full border-gray-600 shadow-2xl p-8 mb-6 object-contain self-center"
          />
          <h2 className="font-semibold mb-3 text-lg ">
            Send us Your information
          </h2>
          <p className="text-gray-600">
            Email your bank statements and last year’s accounts. We will confirm
            once we have everything and if you have chosen the 48-hour
            turnaround, it starts then.
          </p>
        </div>
        <img
          src={LineOne.src}
          alt=""
          className="my-12 hidden md:inline-block"
        />
        {/* Card 3 */}
        <div className="relative flex flex-col text-center bg-white rounded-2xl h-full ">
          <p
            alt="Submission Icon"
            className="absolute w-8 h-8 border rounded-full border-gray-300 bg-gray-200 text-center items-center justify-center font-light  object-contain"
          >
            3
          </p>
          <img
            src={circlefill.src}
            alt="Submission Icon"
            className="w-2/3 aspect-square max-w-50 border rounded-full border-gray-600 shadow-2xl p-8 mb-6 object-contain self-center"
          />
          <h2 className="font-semibold mb-3 text-lg ">Review & Submission</h2>
          <p className="text-gray-600">
            We will prepare your accounts and send them for approval. Once
            approved we will file them online—Quick, Hassle Free and done in as
            little as 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
