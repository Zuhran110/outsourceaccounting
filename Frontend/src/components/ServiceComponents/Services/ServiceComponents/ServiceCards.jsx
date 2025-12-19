import React from "react";

import {
  everytime,
  gettingtoknow,
  prepareaccount,
  reviewexplain,
} from "../../../../assets/images/serivePgsImg/howitworks/howitworksimg.js";

import ServiceCard from "./ServiceCard.jsx";

const data = [
  {
    index: 1,
    imgSrc: gettingtoknow,
    title: "Getting to Know You",
    description:
      "Our first step is understanding your business and its specific needs. This ensures our annual accounts services are fully aligned with your objectives",
  },
  {
    index: 2,
    imgSrc: prepareaccount,
    title: "Preparing Your Accounts",
    description:
      "Using cloud-based accounting systems, we handle every detail, from your balance sheet to your Companies House annual report submission.",
  },
  {
    index: 3,
    imgSrc: reviewexplain,
    title: "Review & Explain",
    description:
      "We don’t just prepare your annual accounts return—we explain them. You’ll understand key figures, ensuring you have a clear picture of your financial health.",
  },
  {
    index: 4,
    imgSrc: everytime,
    title: "Submitting On Time, Every Time",
    description:
      "We guarantee timely submission of your Ltd company accounts to HMRC and Companies House, ensuring you never miss a deadline.",
  },
];

const ServiceCards = () => {
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
