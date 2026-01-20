"use client";
import BulletPoint from "./BulletPoint.jsx";

const BulletPoints = ({ data }) => {
  return (
    <div className="flex flex-col py-4">
      {data?.map((point, index) => {
        const imgUrl = getImageUrl(point.img?.url);

        return (
          <BulletPoint
            key={point.id || index}
            img={imgUrl}
            description={point.description}
            title={point.title}
          />
        );
      })}
    </div>
  );
};
export default BulletPoints;
