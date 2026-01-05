import React from "react";
import ServiceCard from "./ServiceCard.jsx";

const ServiceCards = ({ data }) => {
  return (
    <div className="flex self-center items-center content-center justify-center text-black bg-white gap-2 md:gap-8 flex-wrap">
      {data.map((ServiceCards, index) => {
        const {
          index: serviceIndex,
          imgSrc,
          title,
          description,
        } = ServiceCards;
        return (
          <ServiceCard
            key={serviceIndex}
            imgSrc={imgSrc}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default ServiceCards;
