import React from "react";

import {
    TaxIcon,
    SelfAssessmentIcon,
    VatReturnsIcon,
    TaxCorporationIcon,
    PayrollIcon,
    GroupIcon,
} from "../../../assets/images/Services/ServiceImg.js";

import ServiceCard from "./ServiceCard.jsx";

const data = [
    {
        index: 1,
        imgSrc: GroupIcon,
        title: "Company Accounts",
        description:
            "Outsource Accounting, where your business company accounts get the royal treatment, making you a financial king.",
        extraTxt: "Learn more...",
    },
    {
        index: 2,
        imgSrc: TaxIcon,
        title: "Corporation Tax",
        description:
            "Managing corporation tax is a crucial yet complex aspect of running a UK-based business.",
        extraTxt: "Learn more...",
    },
    {
        index: 3,
        imgSrc: SelfAssessmentIcon,
        title: "Self Assessment",
        description:
            "Financial tranquility of self-assessment tax return, where your financial worries take a back seat.",
        extraTxt: "Learn more...",
    },
    {
        index: 4,
        imgSrc: PayrollIcon,
        title: "Payroll",
        description:
            "Sick of swimming in the payroll paperwork ocean? We understand, and that is why we are here.",
        extraTxt: "Learn more...",
    },
    {
        index: 5,
        imgSrc: VatReturnsIcon,
        title: "VAT Returns",
        description:
            "Alright, buckle up, mates! Our online VAT Return services in the UK are crafted with you in mind.",
        extraTxt: "Learn more...",
    },
    {
        index: 6,
        imgSrc: TaxCorporationIcon,
        title: "Company Formation",
        description:
            "Kudos to you for deciding to start a new venture in the UK! You are in the perfect place for it.",
        extraTxt: "Learn more...",
    },
];

const ServiceCards = () => {
    return (
        <div className="flex self-center items-center content-center justify-center text-black bg-white gap-2 md:gap-8 flex-wrap">
            {data.map((ServiceCards, index) => {
                const { imgSrc, title, description, extraTxt } = ServiceCards;
                return (
                    <ServiceCard
                        key={index}
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