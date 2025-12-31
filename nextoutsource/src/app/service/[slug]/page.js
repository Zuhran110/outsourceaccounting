import { notFound } from "next/navigation";
import { heroData } from "@/data/servicesData";
import Hero from "@/components/services/HeroComponent/Hero";
import Get from "@/components/services/WhatYouGet/Get";
import Outsource from "@/components/services/WhyChooseUs/Outsource";
import FASolutions from "@/components/services/BookACall/FASolutions.jsx";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const serviceData = heroData[slug];

  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <Hero data={serviceData} />
      <Outsource data={serviceData.whyChooseUs} />
      <Get data={serviceData.whatYouGet} />
      <FASolutions />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(heroData).map((slug) => ({
    slug: slug,
  }));
}
