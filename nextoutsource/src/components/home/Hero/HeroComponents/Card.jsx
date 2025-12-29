import React, { useState, useEffect } from "react";

const Card = ({ index, imgComponent, title, content }) => {
  return (
    <div className="flex flex-col items-start justify-start mt-2 gap-3 w-full md:flex-1 min-w-30 md:max-w-xs lg:max-w-md border border-gray-300 p-6 rounded-lg shadow-md bg-white h-auto min-h-48">
      {/* Image */}
      <img src={imgComponent} alt={title} className="w-8 h-8 object-contain" />

      {/* Title */}
      <h2 className="text-sm font-semibold text-neutral-800 wrap-break-word w-full">
        {title}
      </h2>

      {/* Content */}
      <p className="text-xs text-neutral-600 leading-relaxed wrap-break-word w-full">
        {content}
      </p>
    </div>
  );
};
export default Card;
