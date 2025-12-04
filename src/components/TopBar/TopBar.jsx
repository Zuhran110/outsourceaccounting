import React from "react";
//import "./TopBar.css";

import {
  WhatsAppIcon,
  PrimeTwitter,
  PinterestIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  CallIcon,
  MailIcon,
} from "../../assets/images/NavbarTopBar/TopBar/topBar.js";

const TopBar = () => {
  return (
    <div className="  w-full bg-(--color-veryLightBlue) text-gray-800 text-xs flex items-center justify-center px-16 z-1001 flex-wrap">
      <div className="flex items-center justify-center m-auto pb-1 pt-1">
        <div className="contact-item p-1 mr-4 flex items-center justify-center">
          <img src={MailIcon} alt="mail" className="icon p-1" />
          <a href="mailto:admin@outsourceaccountings.co.uk" className="value">
            admin
          </a>
        </div>
        <div className="contact-item p-1 mr-4 flex items-center justify-center">
          <img src={CallIcon} alt="phone" className="icon p-1" />
          <a className="value" href="tel:+442081446811">
            0208 144 6811
          </a>
        </div>
        <div className="contact-item p-1 mr-4 flex items-center justify-center">
          <img src={WhatsAppIcon} alt="whatsapp" className="icon p-1" />
          <a className="value" href="https://wa.me/447723143223">
            +44 7723 143223
          </a>
        </div>
      </div>

      <div className=" lg:w-auto flex justify-center lg:justify-end mt-2 lg:mt-0">
        <a href="#" aria-label="Facebook" className="p-1 ">
          <img src={FacebookIcon} width={20} height={20} alt="Facebook" className="social" />
        </a>
        <a href="#" aria-label="Instagram" className="p-1 ">
          <img src={InstagramIcon} width={20} height={20} alt="Instagram" className="social" />
        </a>
        <a href="#" aria-label="Pinterest" className="p-1 ">
          <img src={PinterestIcon} width={20} height={20} alt="Pintest" className="social" />
        </a>
        <a href="#" aria-label="Twitter" className="p-1 ">
          <img src={PrimeTwitter} width={20} height={20} alt="Twitter" className="social" />
        </a>
        <a href="#" aria-label="LinkedIn" className="p-1 pr-0">
          <img src={LinkedInIcon} width={20} height={20} alt="LinkedIn" className="social" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
