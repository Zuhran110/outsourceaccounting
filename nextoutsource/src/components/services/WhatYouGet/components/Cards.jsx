"use client";
import Card from "./Card.jsx";

const Cards = ({ data }) => {
  return (
    <div className="flex h-auto flex-wrap gap-3 flex-col md:flex-row justify-evenly my-6 xl:mx-10">
      {data.map((card, index) => {
        const { img, title, description } = card;
        return (
          <Card key={index} img={img} title={title} description={description} />
        );
      })}
    </div>
  );
};
export default Cards;
