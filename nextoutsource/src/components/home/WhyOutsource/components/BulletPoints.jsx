"use client";
import { useEffect, useState } from "react";
import BulletPoint from "./BulletPoint.jsx";
import whyOutSourceData from "@/lib/data/homepage/whyOutSourceData.js";
import getImageUrl from "@/lib/utils/getImageUrl";

const BulletPoints = () => {
  const [pointContent, setpointContent] = useState(null);

  const getData = async () => {
    try {
      const res = await whyOutSourceData();
      const pointArray = res.data?.WhyOutsoutcing?.pointerWhyOutsoutcing || [];

      setpointContent(pointArray);
    } catch (error) {
      console.log("error fetching Points");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!pointContent) {
    return (
      <section className="w-full h-[95vh] lg:h-[90vh] flex items-center justify-center">
        Loading...
      </section>
    );
  }

  return (
    <div className="flex flex-col py-4">
      {pointContent.map((point, index) => {
        return (
          <BulletPoint
            key={point.id || index}
            img={getImageUrl(point.imgPoinerWhyOutsoutcing?.url)}
            description={point.pointerTextWhyOutsoutcing}
          />
        );
      })}
    </div>
  );
};
export default BulletPoints;
