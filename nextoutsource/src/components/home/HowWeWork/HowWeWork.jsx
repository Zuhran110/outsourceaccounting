"use client";
import React, { useEffect, useState } from "react";
import howWeWorkAround from "@/lib/data/homepage/howWeWork";
import getImageUrl from "@/lib/utils/getImageUrl";

const HowWeWork = () => {
  const [howWeWorkContent, sethowWeWorkContent] = useState(null);

  const getData = async () => {
    const res = await howWeWorkAround();
    sethowWeWorkContent(res.data.howWeWork);
    console.log(howWeWorkContent);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!howWeWorkContent) {
    return (
      <section className="w-full h-[95vh] lg:h-[90vh] flex items-center justify-center">
        Loading...
      </section>
    );
  }

  return (
    <div className="px-6 py-12 w-full">
      <h1 className="text-center font-bold text-3xl mb-16 text-gray-800">
        {howWeWorkContent.heading}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-4 gap-y-2 mx-auto w-full lg:w-5xl font-light items-start">
        <div className="relative flex flex-col text-center bg-white rounded-2xl h-full ">
          <p
            alt="Submission Icon"
            className="absolute w-8 h-8 border rounded-full border-gray-300 bg-gray-200 text-center items-center justify-center font-light  object-contain"
          >
            {howWeWorkContent.one}
          </p>
          <img
            src={getImageUrl(howWeWorkContent.oneIcon?.url)}
            alt="Service Icon"
            className="w-2/3 aspect-square max-w-50 border rounded-full border-gray-600 shadow-2xl p-8 mb-6 object-contain self-center"
          />

          <h2 className="font-semibold mb-3 text-lg ">Choose Your Service</h2>
          <p className="text-gray-600">{howWeWorkContent.description}</p>
        </div>
        <img
          src={getImageUrl(howWeWorkContent.lineOne?.url)}
          alt=""
          className="my-8 hidden md:inline-block"
        />
        {/* Card 2 */}
        <div className="relative flex flex-col text-center bg-white rounded-2xl h-full ">
          <p
            alt="Submission Icon"
            className="absolute w-8 h-8 border rounded-full border-gray-300 bg-gray-200 text-center items-center justify-center font-light  object-contain"
          >
            {howWeWorkContent.two}
          </p>
          <img
            src={getImageUrl(howWeWorkContent.twoIcon?.url)}
            alt="Info Icon"
            className="w-2/3 aspect-square max-w-50 border rounded-full border-gray-600 shadow-2xl p-8 mb-6 object-contain self-center"
          />
          <h2 className="font-semibold mb-3 text-lg ">
            {howWeWorkContent.titletwo}
          </h2>
          <p className="text-gray-600">{howWeWorkContent.descriptiontwo}</p>
        </div>
        <img
          src={getImageUrl(howWeWorkContent.lineTwo?.url)}
          alt=""
          className="my-12 hidden md:inline-block"
        />
        {/* Card 3 */}
        <div className="relative flex flex-col text-center bg-white rounded-2xl h-full ">
          <p
            alt="Submission Icon"
            className="absolute w-8 h-8 border rounded-full border-gray-300 bg-gray-200 text-center items-center justify-center font-light  object-contain"
          >
            {howWeWorkContent.three}
          </p>
          <img
            src={getImageUrl(howWeWorkContent.threeIcon?.url)}
            alt="Submission Icon"
            className="w-2/3 aspect-square max-w-50 border rounded-full border-gray-600 shadow-2xl p-8 mb-6 object-contain self-center"
          />
          <h2 className="font-semibold mb-3 text-lg ">
            {howWeWorkContent.threeTitle}
          </h2>
          <p className="text-gray-600">{howWeWorkContent.threeDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
