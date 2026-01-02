import { tickCircle } from "@/assets/images/WhyOutsourceAccounting/WhyOutSourceAccounting";
import Point from "./Point";

const Points = ({ data }) => {
  return (
    <ul>
      {data.map((point, index) => {
        const { key, img, description, heading } = point;
        return (
          <Point
            key={key}
            img={img}
            description={description}
            heading={heading}
          />
        );
      })}
    </ul>
  );
};

export default Points;
