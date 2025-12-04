

import React from "react";

import "./../Services.css";

const ServiceCard = ({ index, imgSrc, title, description, extraTxt }) => {
    return (
        <a href="#Learn-more" className="service-card-link" key={index}>
            <div className="service-card">
                <div className="service-card-section1">
                    <img src={imgSrc} alt="service cards" className="service-cards-img" />
                    <h3 className="service-card-title">{title}</h3>
                </div>
                <div className="services-card-section2">
                    <p className="service-card-description">{description}</p>
                    <span className="learn-more">{extraTxt}</span>
                </div>
            </div>
        </a>
    );
};

export default ServiceCard;