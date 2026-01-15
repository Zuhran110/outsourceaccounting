"use client";
import React, { useState, useEffect } from "react";
import ContactUsButton from "@/components/shared/buttons/contactUsButton";
import joinUsCat from "@/lib/data/homepage/joinUs";

const JoinUs = () => {
  const [joinUsContent, setJoinUsContent] = useState(null);
  const getData = async () => {
    const res = await joinUsCat();
    setJoinUsContent(res.data.joinUs);
  };

  useEffect(() => {
    getData();
  }, []);

  const STRAPI = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  if (!joinUsContent) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="relative my-24">
      <img
        src={`${STRAPI}${joinUsContent?.bgImg?.url}`}
        alt="LinkdinIcon"
        className="h-auto w-full overlay-image bg-(--color-ImgOverlay) opacity-90"
      />
      <div
        className="overlay-text absolute inset-0 flex flex-col justify-center items-center 
      bg-opacity-50 p-4"
      >
        <h2 className="text md:text-2xl lg:text-4xl mb-4 text-white text-center max-w-160">
          Join thousands of business owners who trust Outsource Accounting!
        </h2>
        <ContactUsButton />
      </div>
    </div>
  );
};

export default JoinUs;
