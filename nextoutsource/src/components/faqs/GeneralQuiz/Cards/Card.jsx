"use client";
import Cards from "./Cards.jsx";

const data = [
  {
    id: 1,
    service: "What services do you offer ?",
    description:
      "We maintain strict confidentiality through secure data storage, encryption, limited access and adherence to industry standards, ensuring sensitive information remains protected and confidential.",
  },
  {
    id: 2,
    service: "How do you protect client confidentiality?",
    description:
      "Yes, our experts provide comprehensive tax services, including planning, preparation, compliance and controversy resolution, minimizing tax liabilities and ensuring timely filings for individuals and businesses.",
  },
  {
    id: 3,
    service: "Can you assist with tax planning and compliance?",
    description:
      "Yes, schedule a consultation or meeting by contacting us via phone, email or online form, we'll accommodate your schedule to discuss your accounting needs.",
  },
  {
    id: 4,
    service: "Can I schedule a consultation or meeting?",
    description:
      "Yes, we offer cloud-based accounting solutions, providing secure, scalable and remote access to financial data, streamlining operations and enhancing collaboration.",
  },
  {
    id: 5,
    service: "Do you provide cloud-based accounting solutions?",
    description:
      "Yes, our experts provide comprehensive budgeting and financial forecasting services, helping businesses and individuals create realistic plans, manage expenses and achieve long-term financial goals.",
  },
  {
    id: 6,
    service: "Can you help with budgeting and financial forecasting?",
    description:
      "Our experienced team collaborates with industry experts to analyze and resolve complex accounting issues efficiently, providing innovative solutions and ensuring compliance with regulatory standards.",
  },
  {
    id: 7,
    service: "How do you handle complex accounting issues?",
    description:
      "Yes, our experts efficiently manage accounts payable and accounts receivable, ensuring timely payments, accurate invoicing and optimized cash flow to maintain healthy financial operations",
  },
  {
    id: 8,
    service: "Can you help with accounts payable and accounts receivable?",
    description:
      "Yes, our team provides expert grant writing and non-profit accounting services, including financial reporting, budgeting and compliance, to support mission-driven organizations.",
  },
  {
    id: 9,
    service: "Can you help with grant writing and non-profit accounting?",
    description:
      "Yes, our experts set up and maintain accurate bookkeeping and accounting systems, including QuickBooks, Xero and other software, tailored to meet your business needs.",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 items-center w-2/3 justify-self-center">
      {data.map((carding, index) => {
        const { id, service, description } = carding;
        return (
          <Cards key={index} service={service} description={description} />
        );
      })}
    </div>
  );
};

export default Card;
