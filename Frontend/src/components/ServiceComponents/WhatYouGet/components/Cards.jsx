import {
  addbusiness,
  affordableCleanEnergy,
  arttrack,
  housecompliance,
  parkoutline,
  userexpert,
} from "../../../../assets/images/serivePgsImg/Get/Getimg.js";
import Card from "./Card.jsx";

const data = [
  {
    key: 1,
    img: parkoutline,
    title: "Comprehensive Online Accounting Services for UK Businesses",
    description:
      "Outsource Accounting offers a suite of core financial and accounting services designed to support businesses of all sizes. These include monthly bookkeeping, accounts preparation, corporation tax filing, self-assessment tax returns, payroll management, and VAT return submissions.",
  },
  {
    key: 2,
    img: affordableCleanEnergy,
    title: "Affordable Pricing with Transparent, Flat-Rate Fees",
    description:
      "One of the standout benefits highlighted on the website is clear and affordable pricing. Outsource Accounting emphasises flat-rate pricing with no hidden charges — meaning you know what you’ll pay from the start, whether you’re a small start-up or an established company.",
  },
  {
    key: 3,
    img: userexpert,
    title: "Expert Support from Professional UK Accountants",
    description:
      "Instead of automated bots or generic financial software, the services are delivered by a real team of expert accountants who provide personalised one-on-one support. This means you get direct access to professionals who can explain complex financial requirements.",
  },
  {
    key: 4,
    img: addbusiness,
    title: "Insightful Financial Reporting Tailored to Your Business",
    description:
      "Outsource Accounting doesn’t just manage numbers — they provide insightful financial reporting that goes beyond basic bookkeeping. These reports are designed to give you a clearer picture of your company’s financial health, helping you understand profitability, cash flow trends, and tax obligations.",
  },
  {
    key: 5,
    img: arttrack,
    title: "Supportive Mission and Proven Track Record",
    description:
      "According to the website’s “About Us” section, the company started with a simple mission: to make professional accounting affordable and accessible to all UK businesses. With over two decades of experience and more than 1,000 clients served, Outsource Accounting positions itself as a reliable and trustworthy partner committed to helping businesses. ",
  },
  {
    key: 6,
    img: housecompliance,
    title: "Tax Filing, HMRC and Companies House Compliance",
    description:
      "A core part of the service is handling all regulatory filings required in the UK. This includes Corporation Tax returns, VAT return submissions, annual accounts filings with Companies House, and Self-Assessment tax returns for business owners. Outsource Accounting liaises with HM Revenue & Customs (HMRC) and Companies House on your behalf.",
  },
];

const Cards = () => {
  return (
    <div className="flex h-auto flex-wrap gap-3 flex-col md:flex-row justify-evenly my-6">
      {data.map((card, index) => {
        const { img, title, description } = card;
        return <Card img={img} title={title} description={description} />;
      })}
    </div>
  );
};
export default Cards;
