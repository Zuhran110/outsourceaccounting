import React, { useState, useEffect } from "react";


const Card = ({ index, imgComponent, title, content }) => {


    return (
        <div className="hero-card flex flex-col items-start justify-start gap-2 grow min-w-[6dvw] text-left border border-gray-300 p-6 mb-2 mx-1 h-48 rounded shadow-md">
            <img src={imgComponent} alt="AutherizedAgent" />
            <h2 className="hero-card-title text-base font-semibold text-neutral-700 m-0">{title}</h2>
            <p className="hero-card-txt text-xs mt-0 text-neutral-700">{content}</p>
        </div>
    );
}
export default Card;