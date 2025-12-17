import React from "react";
import JoinUS from "../../assets/images/JoinUs/BgImg.png";

const JoinUs = () => {
  return (
    <div className="relative my-24">
      <img
        src={JoinUS}
        alt="LinkdinIcon"
        className="h-auto w-full overlay-image bg-(--color-ImgOverlay) opacity-90"
      />
      <div
        className="overlay-text absolute inset-0 flex flex-col justify-center items-center 
      bg-opacity-50 p-4"
      >
        <h2 className="text md:text-2xl lg:text-4xl mb-4 text-white text-center max-w-160">
          Join thousands of business owners who trust Outsource Accounting!
        </h2>
        <a
          href="#"
          className=" text-white text-center bg-(--color-buttonBlue) py-3 px-8 font-light rounded-4xl 
          hidden sm:block hover:bg-(--color-buttonHoverBlue) transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default JoinUs;
