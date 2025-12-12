import { tickCircle } from "../../../assets/images/WhyOutsourceAccounting/WhyOutSourceAccounting.js";

import BulletPoint from "./BulletPoint.jsx";

const data = [
  {
    key: 1,
    img: tickCircle,
    description: "Simple, fast, 100% online process",
  },
  {
    key: 2,
    img: tickCircle,
    description: "Sorted by an accredited UK accountant",
  },
  {
    key: 3,
    img: tickCircle,
    description: "Filed in as little as 48 hours",
  },
  {
    key: 4,
    img: tickCircle,
    description: "Transparent fixed pricing",
  },
];

const BulletPoints = () => {
  return (
    <div className="flex flex-col py-4">
      {data.map((point, index) => {
        const { key, img, description } = point;

        return <BulletPoint key={key} img={img} description={description} />;
      })}
    </div>
  );
};
export default BulletPoints;
