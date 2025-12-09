import React from "react";

import {
  CompanyIcon,
  ReviewSubmitIcon,
  SendInfoIcon,
} from "../../assets/images/HowWeWork/HowWeWork";

const HowWeWork = () => {
  return (
    <div className="px-6 py-12 w-full bg-gray-50">
      <h1 className="text-center font-bold text-3xl mb-16 text-gray-800">
        How We Work
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 mx-auto w-full lg:w-3/4 font-light">
        <div className="relative border  bg-white rounded-2xl border-blue-800 p-6 pt-16 flex flex-col justify-start items-start h-full">
          <img
            src={CompanyIcon}
            alt="Service Icon"
            className="absolute -top-8 left-6 w-16 h-16 bg-white border border-blue-800 p-3 rounded-2xl object-contain"
          />

          <h2 className="font-bold mb-3 text-lg ">Choose Your Service</h2>
          <p className="text-gray-600">
            Select the service you need online, enter your details and complete
            the payment.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative border border-blue-800 bg-white rounded-2xl p-6 pt-16 flex flex-col justify-start items-start h-full">
          <img
            src={ReviewSubmitIcon}
            alt="Info Icon"
            className="absolute -top-8 left-6 w-16 h-16 bg-white border border-blue-800 p-3 rounded-2xl object-contain"
          />
          <h2 className="font-bold mb-3 text-lg ">Send us Your information</h2>
          <p className="text-gray-600">
            Email your bank statements and last year’s accounts. We will confirm
            once we have everything and if you have chosen the 48-hour
            turnaround, it starts then.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative border border-blue-800 bg-white rounded-2xl p-6 pt-16 flex flex-col justify-start items-start h-full">
          <img
            src={SendInfoIcon}
            alt="Submission Icon"
            className="absolute -top-8 left-6 w-16 h-16 bg-white border border-blue-800 p-3 rounded-2xl object-contain"
          />
          <h2 className="font-bold mb-3 text-lg ">Review & Submission</h2>
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
