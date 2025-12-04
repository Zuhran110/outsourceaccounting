import React from "react";
import "./TopBar.css";

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
    <div className="topbar">

      <div className="topbar-contacts">
        <div className="contact-item">
          <img src={MailIcon} alt="mail" className="icon" />
          <a href="mailto:admin@outsourceaccountings.co.uk" className="value">admin@outsourceaccountings.co.uk</a>
        </div>
        <div className="contact-item">
          <img src={CallIcon} alt="phone" className="icon" />
          <a className="value" href="tel:+442081446811">0208 144 6811</a>
        </div>
        <div className="contact-item">
          <img src={WhatsAppIcon} alt="whatsapp" className="icon" />
          <a className="value" href="https://wa.me/447723143223">+44 7723 143223</a>
        </div>
      </div>

      <div className="topbar-section topbar-right">
        <a href="#" aria-label="Facebook">
          <img src={FacebookIcon} alt="Facebook" className="social" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={InstagramIcon} alt="Instagram" className="social" />
        </a>
        <a href="#" aria-label="Pinterest">
          <img src={PinterestIcon} alt="Pintest" className="social" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={PrimeTwitter} alt="Twitter" className="social" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img src={LinkedInIcon} alt="LinkedIn" className="social" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
