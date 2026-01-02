import { notFound } from "next/navigation";
import { heroData } from "@/data/servicesData";
import Hero from "@/components/services/HeroComponent/Hero";
import Get from "@/components/services/WhatYouGet/Get";
import Outsource from "@/components/services/WhyChooseUs/Outsource";
import FASolutions from "@/components/services/BookACall/FASolutions.jsx";
import Services from "../../../components/services/Services/Services";
import AnnualAccounts from "@/components/services/AnnualAcounts/AnnualAcounts";
import What from "@/components/services/what/what";
import GetStarted from "@/components/services/GetStarted/GetStarted";
import Statistics from "@/components/services/Statistics/Statistics";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const serviceData = heroData[slug];

  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <Hero data={serviceData} />
      <Services data={serviceData.ServiceData} />
      <What data={serviceData.WhatData} />
      <AnnualAccounts data={serviceData.WhoData} />
      <Get data={serviceData.whatYouGet} />
      <Outsource data={serviceData.whyChooseUs} />
      <Statistics data={serviceData.statics} />
      <FASolutions />
      <GetStarted data={serviceData.getstarted} />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(heroData).map((slug) => ({
    slug: slug,
  }));
}
