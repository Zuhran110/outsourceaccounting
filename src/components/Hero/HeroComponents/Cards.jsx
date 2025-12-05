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
        <div className="flex flex-wrap relative items-center justify-center w-full px-16">
            {data.map((card, index) => {
                const { imgComponent, title, content } = card;

                return (
                    <Card key={index} imgComponent={imgComponent} title={title} content={content} />
                );
            })}
        </div>
    );
};
export default Cards;
