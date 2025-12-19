import React from "react";
import Layout from "../../layout.jsx";
import HeroDataProvider from "../../components/ServiceComponents/HeroComponent/Hero.jsx";
import Service from "../../components/ServiceComponents/Services/Services.jsx";
import Outsource from "../../components/ServiceComponents/WhyChooseUs/Outsource.jsx";
import Get from "../../components/ServiceComponents/WhatYouGet/Get.jsx";
import AnnualAcounts from "../../components/ServiceComponents/AnnualAcounts/AnnualAcounts.jsx";
import FASolutions from "../../components/ServiceComponents/BookACall/FASolutions.jsx";

const AnnualAccount = () => {
  return (
    <Layout>
      <HeroDataProvider />
      <Service />
      <Outsource />
      <Get />
      <AnnualAcounts />
      <FASolutions />
    </Layout>
  );
};

export default AnnualAccount;
