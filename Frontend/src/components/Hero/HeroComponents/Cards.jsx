import {
  CompanyFormation,
  GreatValue,
  Support,
  AutherizedAgent,
  UnmatchedExperience,
} from "../../../assets/images/HeroSection/belowHero/index.js";
import Card from "./Card";

const data = [
  {
    index: 1,
    imgComponent: AutherizedAgent,
    title: "Autherized Agent",
    content: "5 Star Rated Companies House Authorised Formation Agent",
  },
  {
    index: 2,
    imgComponent: GreatValue,
    title: "Great Value",
    content:
      "Affordable Packages start From 54.99 and you can est assured there are never Hidden costs.",
  },
  {
    index: 3,
    imgComponent: UnmatchedExperience,
    title: "Unmatched Experience",
    content:
      "20+ years of experience, we know what it takes to get your business set up smothly and quickly.",
  },
  {
    index: 4,
    imgComponent: Support,
    title: "24/7 Support",
    content:
      "We’re always here for you. Call, email or use online chat whenever it suits you.",
  },
  {
    index: 5,
    imgComponent: CompanyFormation,
    title: "Fast Company Formation",
    content: "Over 1 M+ orders Processed for clients globally",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row relative items-start justify-evenly w-full px-6 md:px-24 mt-4 md:mt-0 gap-4">
      {data.map((card, index) => {
        const { imgComponent, title, content } = card;

        return (
          <Card
            key={index} // Changed card.index to index to ensure it works
            imgComponent={imgComponent}
            title={title}
            content={content}
          />
        );
      })}
    </div>
  );
};
export default Cards;
