import { tickCircle } from "../../../../assets/images/WhyOutsourceAccounting/WhyOutSourceAccounting.js";

import BulletPoint from "./BulletPoint.jsx";

const data = [
  {
    key: 1,
    img: tickCircle,
    title: "Compliance You Can Trust",
    description:
      "We handle everything from preparing your financial statements to submitting them to HMRC and Companies House. Our experts stay up to date with the latest regulations, ensuring your statutory accounts and end of the year accounting are fully compliant and filed correctly.",
  },
  {
    key: 2,
    img: tickCircle,
    title: "No Hidden Costs:",
    description:
      "We believe in transparency. Our annual accounts services operate on a fixed pricing model—what we quote is what you pay, with no hidden fees.",
  },
  {
    key: 3,
    img: tickCircle,
    title: "Expert Advice, Anytime:",
    description:
      "Your company annual accounts service isn’t just a legal requirement—it’s an opportunity to gain insights into your financial health. We go beyond compliance, offering actionable advice to help you reduce tax liabilities and identify growth opportunities.",
  },
];

const BulletPoints = () => {
  return (
    <div className="flex flex-col py-4">
      {data.map((point, index) => {
        const { key, img, description, title } = point;

        return (
          <BulletPoint
            key={key}
            img={img}
            description={description}
            title={title}
          />
        );
      })}
    </div>
  );
};
export default BulletPoints;
