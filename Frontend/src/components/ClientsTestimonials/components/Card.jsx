import React from "react";

const Card = ({ index, bgImg, personImg, name, title, description }) => {
  return (
    <div className="min-w-[300px] w-full max-w-[350px] border border-gray-200 rounded-2xl overflow-hidden shrink-0 bg-white snap-center shadow-sm hover:shadow-md transition-shadow">
      <div className="h-auto w-full">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-6 pb-6 relative flex flex-col items-center">
        <div className="-mt-24 mb-4">
          <img
            src={personImg}
            alt={name}
            className="w-32 h-32 rounded border-white shadow-sm"
          />
        </div>
        <h2 className=" text-xl text-gray-900 text-center">{name}</h2>

        <h3 className="text-sm font-medium text-gray-900 mb-4 text-center">
          {title}
        </h3>

        <p className=" text-gray-600 text-center text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
