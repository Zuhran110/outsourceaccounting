import { tickCircle } from "../../../../assets/images/WhyOutsourceAccounting/WhyOutSourceAccounting.js";

import BulletPoint from "./BulletPoint.jsx";

const data = [
  {
    key: 1,
    img: tickCircle,
    title: "Balance Sheet: ",
    description:
      "Shows your company’s assets, liabilities, and overall financial position.",
  },
  {
    key: 2,
    img: tickCircle,
    title: "Profit and Loss Account: ",
    description:
      "Details your financial performance over the year, showing profits or losses",
  },
  {
    key: 3,
    img: tickCircle,
    title: "Director’s Report: ",
    description:
      "For larger companies, this summarises management activities for shareholders.",
  },
  {
    key: 4,
    img: tickCircle,
    title: "Director’s Report: ",
    description: "Provides additional context to explain financial figures",
  },
  {
    key: 5,
    img: tickCircle,
    title: "Notes to the Accounts: ",
    description:
      "Offers professional insight into your company’s financial health.",
  },
];

const BulletPoints = () => {
  return (
    <div className="flex flex-col py-4 ">
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
