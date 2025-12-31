"use client";
import BulletPoint from "./BulletPoint.jsx";

const BulletPoints = ({ data }) => {
  return (
    <div className="flex flex-col py-4">
      {data.map((point, index) => {
        const { key, img, description, title } = point;

        return (
          <BulletPoint
            key={index}
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
