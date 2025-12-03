import React, { useState, useEffect } from "react";

import "./Hero.css";


const Card = ({ imgComponent, title, content }) => {


    return (
        <div className="hero-card">
            <img src={imgComponent} alt="AutherizedAgent" />
            <h2 className="hero-card-title">{title}</h2>
            <p className="hero-card-txt">{content}</p>
        </div>
    );
}
export default Card;