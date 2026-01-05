import React from "react";
import TaxIcon from "@/assets/images/Services/TaxIcon.png";
import SelfAssessmentIcon from "@/assets/images/Services/SelfAssessmentIcon.png";
import VatReturnsIcon from "@/assets/images/Services/VatReturnIcon.png";
import TaxCorporationIcon from "@/assets/images/Services/TaxCorporationIcon.png";
import PayrollIcon from "@/assets/images/Services/PayrollIcon.png";
import GroupIcon from "@/assets/images/Services/GroupIcon.png";
import ServiceCard from "./ServiceCard.jsx";

const data = [
  {
    index: 1,
    pglink: "/service/Annual-Accounts",
    imgSrc: GroupIcon.src,
    title: "Company Accounts",
    description:
      "Outsource Accounting, where your business company accounts get the royal treatment, making you a financial king. Our dedicated team of online UK accountants is here to make your financial management a breeze, offering...",
    extraTxt: "Learn more...",
  },
  {
    index: 2,
    pglink: "/service/Corporation-Tax",
    imgSrc: TaxIcon.src,
    title: "Corporation Tax",
    description:
      "Simplify your tax responsibilities with our HMRC-approved Corporation Tax services for UK limited companies. Our qualified accountants handle everything from accurate tax calculations to timely online filing.",
    extraTxt: "Learn more...",
  },
  {
    index: 3,
    pglink: "/service/Self-Assessment-Tax",
    imgSrc: SelfAssessmentIcon.src,
    title: "Self Assessment",
    description:
      "financial tranquility of self-assessment tax return, where your financial worries take a back seat, and we handle your self-assessment tax return smoothly. we are not just regular bean counters; we sweep through the....",
    extraTxt: "Learn more...",
  },
  {
    index: 4,
    pglink: "/service/Payroll-services",
    imgSrc: PayrollIcon.src,
    title: "Payroll",
    description:
      "Sick of swimming in the payroll paperwork ocean? We understand, and that is why we are here.Our splendid PAYE online services are the bee's knees, designed to handle the nitty-gritty of payroll management with the finesse...",
    extraTxt: "Learn more...",
  },
  {
    index: 5,
    pglink: "/service/vat-returns",
    imgSrc: VatReturnsIcon.src,
    title: "VAT Returns",
    description:
      "Alright, buckle up, mates! Our online VAT Return services in the UK are crafted with you in mind - yes, you savvy directors, contractors, freelancers, and sole traders running the show. We know, going through the mind-boggling..",
    extraTxt: "Learn more...",
  },
  {
    index: 6,
    pglink: "/service/company-formation",
    imgSrc: TaxCorporationIcon.src,
    title: "Company Formation",
    description:
      "Your ultimate solution for limited company formation and seamless UK company registration. We specialise in making the process simple, fast, and hassle-free. Let us handle the details while you focus...",
    extraTxt: "Learn more...",
  },
];

const ServiceCards = () => {
  return (
    <div className="flex self-center items-center content-center justify-center text-black bg-white gap-2 md:gap-8 flex-wrap">
      {data.map((ServiceCards, index) => {
        const {
          index: serviceIndex,
          pglink,
          imgSrc,
          title,
          description,
          extraTxt,
        } = ServiceCards;
        return (
          <ServiceCard
            key={serviceIndex}
            pglink={pglink}
            imgSrc={imgSrc}
            title={title}
            description={description}
            extraTxt={extraTxt}
          />
        );
      })}
    </div>
  );
};

export default ServiceCards;
