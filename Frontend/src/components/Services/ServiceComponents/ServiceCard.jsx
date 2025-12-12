import React from "react";

const ServiceCard = ({ index, imgSrc, title, description, extraTxt }) => {
  return (
    <a href="#Learn-more" className="no-underline text-inherit flex-wrap">
      <div
        className="flex flex-col items-center justify-start bg-white rounded-lg p-3 md:p-6 h-auto border 
            border-[#333333] transition-transform w-70 md:w-80 min-h-54.5 md:min-h-68"
      >
        <div className="flex flex-row items-center w-full">
          <img src={imgSrc} alt="service cards" className="w-12 h-12 mr-4" />
          <h3 className="text-[1.25rem] font-light mb-2 text-black">{title}</h3>
        </div>
        <div className="mt-4 text-center flex flex-col w-full">
          <p className="text-[1rem] font-normal text-start text-black">
            {description}
          </p>
          <span className="mt-4 text-[1rem] font-medium text-black no-underline text-start">
            {extraTxt}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;
