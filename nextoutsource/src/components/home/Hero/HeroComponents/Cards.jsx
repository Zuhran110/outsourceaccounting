"use client";
import Card from "./Card";
import heroData from "@/lib/data/homepage/heroData";
import { useState, useEffect } from "react";
import getImageUrl from "@/lib/utils/getImageUrl";

const Cards = () => {
  const [heroContent, setHeroContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await heroData();
      const cardsArray = res.data?.heroSection?.Card || [];

      setHeroContent(cardsArray);
    } catch (error) {
      console.error("Error fetching hero cards:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <section className="w-full h-[95vh] lg:h-[90vh] flex items-center justify-center">
        Loading...
      </section>
    );
  }

  if (!heroContent) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:flex-row relative w-full px-6 md:px-24 xl:px-44 mt-4 md:mt-0 gap-4">
      {heroContent.map((card, index) => {
        return (
          <Card
            key={card.id || index}
            imgComponent={getImageUrl(card.imgComponent?.url)}
            title={card.title}
            content={card.content}
          />
        );
      })}
    </div>
  );
};
export default Cards;
