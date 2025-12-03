
import "./Hero.css";

import { CompanyFormation, GreatValue, Support, AutherizedAgent, UnmatchedExperience } from "../../assets/images/HeroSection/belowHero/index.js";
import Card from "./Card";





const data = [
    {
        imgComponent: AutherizedAgent,
        title: "Autherized Agent",
        content: "5 Star Rated Companies House Authorised Formation Agent"
    },
    {
        imgComponent: GreatValue,
        title: "Great Value",
        content: "Affordable Packages start From 54.99 and you can est assured there are never Hidden costs."
    },
    {
        imgComponent: UnmatchedExperience,
        title: "Unmatched Experience",
        content: "20+ years of experience, we know what it takes to get your business set up smothly and quickly."
    },
    {
        imgComponent: Support,
        title: "24/7 Support",
        content: "We’re always here for you. Call, email or use online chat whenever it suits you."
    },
    {
        imgComponent: CompanyFormation,
        title: "Fast Company Formation",
        content: "Over 1 M+ orders Processed for clients globally"
    },




]







const Cards = () => {


    return (
        <div className="hero--container-card">

            {data.map((card, index) => {

                const { imgComponent, title, content } = card;

                return (
                    <Card imgComponent={imgComponent} title={title} content={content} />

                )
            })}
        </div>
    );
}
export default Cards;