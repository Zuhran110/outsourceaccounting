import React from "react";
import "./TopBar.css";

import mailIcon from "../../assets/images/NavbarTopBar/tabler_mail-filled.png";
import phoneIcon from "../../assets/images/NavbarTopBar/fluent_call-16-filled.png";
import whatsappIcon from "../../assets/images/NavbarTopBar/ri_whatsapp-fill.png";

import facebookIcon from "../../assets/images/NavbarTopBar/ic_baseline-facebook.png";
import instagramIcon from "../../assets/images/NavbarTopBar/instagram.png";
import twitterIcon from "../../assets/images/NavbarTopBar/prime_twitter.png";
import linkedinIcon from "../../assets/images/NavbarTopBar/mdi_linkedin.png";
import PintrastIcon from "../../assets/images/NavbarTopBar/mdi_pinterest.png";

const TopBar = () => {
  return (
    <div className="topbar">

      <div className="topbar-contacts">
        <div className="contact-item">
          <img src={mailIcon} alt="mail" className="icon" />
          <a href="mailto:admin@outsourceaccountings.co.uk" className="value">admin@outsourceaccountings.co.uk</a>
        </div>
        <div className="contact-item">
          <img src={phoneIcon} alt="phone" className="icon" />
          <a className="value" href="tel:+442081446811">0208 144 6811</a>
        </div>
        <div className="contact-item">
          <img src={whatsappIcon} alt="whatsapp" className="icon" />
          <a className="value" href="https://wa.me/447723143223">+44 7723 143223</a>
        </div>
      </div>

      <div className="topbar-section topbar-right">
        <a href="#" aria-label="Facebook">
          <img src={facebookIcon} alt="Facebook" className="social" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram" className="social" />
        </a>
        <a href="#" aria-label="Pinterest">
          <img src={PintrastIcon} alt="Pintest" className="social" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={twitterIcon} alt="Twitter" className="social" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" className="social" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
