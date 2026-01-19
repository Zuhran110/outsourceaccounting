"use client";
import BulletPoint from "./BulletPoint.jsx";

const BulletPoints = ({ data }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  return (
    <div className="flex flex-col py-4">
      {data?.map((point, index) => {
        const imgUrl = point.img?.url ? `${strapiUrl}${point.img.url}` : point.img;

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
