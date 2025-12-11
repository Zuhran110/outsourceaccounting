import React from "react";

import {
  MailIcon,
  CallIcon,
  WhatsAppIcon,
  LocationIcon,
} from "../../../assets/images/Footer/footerImg.js";

import {
  LinkdinIcon,
  TwitterIcon,
  PintrestIcon,
  InstagramIcon,
  FacebookIcon,
} from "../../../assets/images/Footer/MoreUpdates/moreUpdates.js";
import Services from "./components/Services.jsx";
import Comapany from "./components/Company.jsx";
import ContactUS from "./components/ContactUS.jsx";

const Footer = () => {
  return (
    <footer className=" bg-(--color-buttonBlue) text-amber-50 rounded-base shadow-xs border border-default px-4">
      <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          <div className="flex flex-col gap-6 h-auto">
            <div>
              <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
                Outsource Accounting
              </span>
              <p className="wrap max-w-120 mt-8 font-light">
                We at Outsource Accounting Ltd are a reliable UK-based
                Accounting firm that specialises in providing affordable
                accounting and tax filing services online for clients within the
                UK. 
              </p>
            </div>
            <div className="mt-auto">
              <p className="font-light">Follow us for more updates:</p>
              <ul className="flex gap-6 mt-3">
                <li>
                  <img
                    src={LinkdinIcon}
                    alt="LinkdinIcon"
                    className="h-6 w-6"
                  />
                </li>
                <li>
                  <img
                    src={TwitterIcon}
                    alt="TwitterIcon"
                    className="h-6 w-6"
                  />
                </li>
                <li>
                  <img
                    src={PintrestIcon}
                    alt="PintrestIcon"
                    className="h-6 w-6"
                  />
                </li>
                <li>
                  <img
                    src={InstagramIcon}
                    alt="InstagramIcon"
                    className="h-6 w-6"
                  />
                </li>
                <li>
                  <img
                    src={FacebookIcon}
                    alt="FacebookIcon"
                    className="h-6 w-6"
                  />
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex flex-wrap items-start w-auto  mb-6 ml-0 mt-4 md:mt-0 md:ml-3 lg:ml-12 text-sm font-medium text-body sm:mb-0 gap-4 lg:gap-16">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Services
              </a>
              <Services />
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Company
              </a>
              <Comapany />
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Contact Us
              </a>
              <ContactUS />
            </li>
          </ul>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <div className="flex justify-between">
          <span className="block text-sm text-body items-start">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Outsource Accounting
            </a>
            Outsource Accounting. All rights reserved.
          </span>
          <span className=" flex text-sm text-body items-end gap-3">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
