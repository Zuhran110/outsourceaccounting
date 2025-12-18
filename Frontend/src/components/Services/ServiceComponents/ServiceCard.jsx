import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({
  index,
  pglink,
  imgSrc,
  title,
  description,
  extraTxt,
}) => {
  return (
    <NavLink to={pglink} className="no-underline text-inherit flex-wrap">
      <div
        className="flex flex-col items-center justify-start bg-white rounded-lg p-3 md:p-6 h-auto border 
            border-[#333333] transition-transform w-70 md:w-80 min-h-75 md:min-h-80 max-h-80"
      >
        <div className="flex flex-row items-center w-full">
          <img src={imgSrc} alt="service cards" className="w-12 h-12 mr-4" />
          <h3 className="text-[1.25rem] font-light mb-2 text-black">{title}</h3>
        </div>
        <div className="mt-4 text-center flex flex-col w-full">
          <p className="text-[1rem] font-light text-start text-black">
            {description}
          </p>
          <span className="mt-4 text-[1rem] font-medium text-black no-underline text-start align-bottom justify-between">
            {extraTxt}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ServiceCard;
