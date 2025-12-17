import {
  AccountsPayable,
  Bookkeeping,
  Cloude,
  GrantWriting,
  HelpWithBudgeting,
  ProtectClient,
  SacheduleMeeting,
  Service,
  TaxPlanning,
} from "../../../../assets/images/OutSourseHero/GeneralQuestions/GQimg.js";

import Cards from "./Cards.jsx";

const data = [
  {
    id: 1,
    service: "What services do you offer ?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 2,
    service: "How do you protect client confidentiality?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 3,
    service: "Can you assist with tax planning and compliance?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 4,
    service: "Can I schedule a consultation or meeting?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 5,
    service: "Do you provide cloud-based accounting solutions?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 6,
    service: "Can you help with budgeting and financial forecasting?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 7,
    service: "How do you handle complex accounting issues?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 8,
    service: "Can you help with accounts payable and accounts receivable?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 9,
    service: "Can you help with grant writing and non-profit accounting?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
];

const Card = () => {
  return (
    <div className="flex flex-col items-center w-2/3 justify-self-center">
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
