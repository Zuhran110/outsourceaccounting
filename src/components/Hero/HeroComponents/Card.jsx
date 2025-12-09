import React, { useState, useEffect } from "react";

const Card = ({ index, imgComponent, title, content }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 min-w-30 w-70 lg:w-120 md:max-w-60 border border-gray-300 p-6 mb-2 mx-1 min-h-48 rounded-lg shadow-md bg-white">
      <img src={imgComponent} alt={title} className="w-8 h-8 object-contain" />

      <h2 className="text-sm font-semibold text-neutral-800 wrap-break-word">
        {title}
      </h2>

      <p className="text-xs text-neutral-600 leading-relaxed wrap-break-word">
        {content}
      </p>
    </div>
  );
};
export default Card;
