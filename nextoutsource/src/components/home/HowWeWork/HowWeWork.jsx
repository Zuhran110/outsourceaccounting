import React from "react";
import CompanyIcon from "@/assets/images/HowWeWork/Company.png";
import ReviewSubmitIcon from "@/assets/images/HowWeWork/ReviewSubmit.png";
import SendInfoIcon from "@/assets/images/HowWeWork/SendInfo.png";
import one from "@/assets/images/HowWeWork/one.png";
import two from "@/assets/images/HowWeWork/two.png";
import three from "@/assets/images/HowWeWork/three.png";

const HowWeWork = () => {
  return (
    <div className="px-6 py-12 w-full">
      <h1 className="text-center font-bold text-3xl mb-16 text-gray-800">
        How We Work
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-12 mx-auto w-full lg:w-5xl font-light">
        <div className="relative flex flex-col justify-start h-full  border  bg-white rounded-2xl border-blue-800 p-6 pt-6 ">
          <img
            src={one.src}
            alt="Service Icon"
            className="absolute -top-8 -left-6 w-18 h-18 border-blue-800  object-contain"
          />
          <img
            src={CompanyIcon.src}
            alt="Service Icon"
            className="w-3/4 h-3/4 bg-white p-3 mb-6 object-contain self-end"
          />

          <h2 className="font-semibold mb-3 text-lg ">Choose Your Service</h2>
          <p className="text-gray-600">
            Select the service you need online, enter your details and complete
            the payment.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col  border  bg-white rounded-2xl border-blue-800 p-6 pt-6 h-full">
          <img
            src={two.src}
            alt="Info Icon"
            className="absolute -top-8 -left-6 w-16 h-16 border-blue-800  object-contain"
          />
          <img
            src={ReviewSubmitIcon.src}
            alt="Info Icon"
            className="w-16 h-16 bg-white p-3 mb-6 object-contain self-end"
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

        {/* Card 3 */}
        <div className="relative flex flex-col  border  bg-white rounded-2xl border-blue-800 p-6 pt-6 h-full">
          <img
            src={three.src}
            alt="Submission Icon"
            className="absolute -top-8 -left-6 w-16 h-16 border-blue-800  object-contain"
          />
          <img
            src={SendInfoIcon.src}
            alt="Submission Icon"
            className=" w-16 h-16 bg-white p-3 mb-6 object-contain self-end"
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
