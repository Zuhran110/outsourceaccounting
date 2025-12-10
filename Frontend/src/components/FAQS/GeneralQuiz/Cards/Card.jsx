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
    img: AccountsPayable,
    service: "What services do you offer ?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 2,
    img: Bookkeeping,
    service: "How do you protect client confidentiality?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 3,
    img: Cloude,
    service: "Can you assist with tax planning and compliance?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 4,
    img: GrantWriting,
    service: "Can I schedule a consultation or meeting?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 5,
    img: ProtectClient,
    service: "Do you provide cloud-based accounting solutions?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 6,
    img: HelpWithBudgeting,
    service: "Can you help with budgeting and financial forecasting?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 7,
    img: SacheduleMeeting,
    service: "How do you handle complex accounting issues?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 8,
    img: Service,
    service: "Can you help with accounts payable and accounts receivable?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
  {
    id: 9,
    img: TaxPlanning,
    service: "Can you help with grant writing and non-profit accounting?",
    description:
      "We offer comprehensive accounting services, including financial statement preparation, tax planning, auditing, bookkeeping, business consulting, payroll processing and financial planning for individuals, businesses and non-profit organizations.",
  },
];

const Card = () => {
  return (
    <div className="my-6 lg:my-12 mx-6 md:mx-12">
      {data.map((carding, index) => {
        const { img, service, description } = carding;
        return (
          <div>
            <Cards
              key={index}
              img={img}
              service={service}
              description={description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
