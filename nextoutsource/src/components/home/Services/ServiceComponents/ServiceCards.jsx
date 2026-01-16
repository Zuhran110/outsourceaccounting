"use client";
import ServiceCard from "./ServiceCard.jsx";
import { useEffect, useState } from "react";
import serviceData from "@/lib/data/homepage/serviceData.js";
import getImageUrl from "@/lib/utils/getImageUrl";

const ServiceCards = () => {
  const [serviceCardContent, setServiceCardContent] = useState(null);

  const getData = async () => {
    const res = await serviceData();
    setServiceCardContent(res.data?.service?.serviceCard || []);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!serviceCardContent) {
    return (
      <section className="w-full h-[95vh] lg:h-[90vh] flex items-center justify-center">
        Loading...
      </section>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center text-black bg-white gap-2 md:gap-2 w-7/9">
      {serviceCardContent.map((ServiceCards, index) => {
        return (
          <ServiceCard
            key={ServiceCards.id || index}
            pglink={ServiceCards.pglink}
            imgServiceCard={getImageUrl(ServiceCards.imgServiceCard?.url)}
            titleServiceCard={ServiceCards.titleServiceCard}
            descriptionServiceCard={ServiceCards.descriptionServiceCard}
            buttontxtServiceCard={ServiceCards.buttontxtServiceCard}
          />
        );
      })}
    </div>
  );
};

export default ServiceCards;
