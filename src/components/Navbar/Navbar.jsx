import React, {  useState } from "react";
//import "./Navbar.css";

import {
  CompanyLogo,
  HamburgerMenu,
  CloseMenu
} from "../../assets/images/NavbarTopBar/NavbarImg.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] =  useState(false);


  const onClick = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
  }


  return (
    <>
      <nav className="    w-full top-0 left-0 pl-16 pr-16 z-1000 bg-white items-center justify-between hidden md:flex">
        <div className="flex items-center justify-between w-full py-3">

          
          <div className="navbar-logo">
            <img src={CompanyLogo} alt="Company Logo" />
          </div>

          
           
            <ul className="navbar-link justify-between items-center hidden md:flex">
              <li><a href="/" className="p-1 ">Home</a></li>
              <li><a href="#services" className="p-1 ">Services</a></li>
              <li><a href="#about" className="p-1 ">About Us</a></li>
              <li><a href="#blog" className="p-1 ">Blogs</a></li>
              <li><a href="#faq" className="p-1 ">FAQs</a></li>
            </ul>
         

           
          <a href="#contact" className="navbar-btn bg-(--color-buttonBlue) pr-6 pl-6 pt-3 pb-3 text-white font-semibold border-2 rounded-2xl hidden md:flex">
            Contact Us
          </a>
        </div>
      </nav >





      <nav className="  md:hidden      w-full bg-white/98 border-b border-gray-100   shadow-sm">
        <div className="relative w-full px-4 p-8 flex justify-between items-center">

          {/* Logo - Absolute Left */}
          <div className=" ">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="w-20 h-auto"
            />
          </div>

          {/* Hamburger / Close Icon - Absolute Right */}
          <div
            className="  cursor-pointer"
            onClick={onClick}
          >
            <img
              src={menuOpen ? CloseMenu : HamburgerMenu}
              alt={menuOpen ? "Close Menu" : "Menu"}
              className="w-6 h-auto block"
            />
          </div>

          {/* Dropdown Menu Links */}
          {menuOpen && (
            <ul className="flex flex-col items-center bg-[#ecf6fe] absolute top-full left-0 w-full h-screen py-4 shadow-md z-[999]">
              <li className="w-full flex items-center">
                <a href="/" className="block w-full text-right py-2 px-4 border-b border-[#542ecc] text-base text-gray-800 hover:text-gray-600 no-underline">
                  Home
                </a>
              </li>
              <li className="w-full">
                <a href="#services" className="block w-full text-right py-2 px-4 border-b border-[#542ecc] text-base text-gray-800 hover:text-gray-600 no-underline">
                  Services
                </a>
              </li>
              <li className="w-full">
                <a href="#about" className="block w-full text-right py-2 px-4 border-b border-[#542ecc] text-base text-gray-800 hover:text-gray-600 no-underline">
                  About Us
                </a>
              </li>
              <li className="w-full">
                <a href="#blog" className="block w-full text-right py-2 px-4 border-b border-[#542ecc] text-base text-gray-800 hover:text-gray-600 no-underline">
                  Blogs
                </a>
              </li>
              <li className="w-full">
                <a href="#faq" className="block w-full text-right py-2 px-4 border-b border-[#542ecc] text-base text-gray-800 hover:text-gray-600 no-underline">
                  FAQs
                </a>
              </li>

              {/* Contact Button - Pushed to bottom */}
              <li className="mt-auto mb-8">
                <a
                  href="#contact"
                  className="inline-block bg-[#542ecc] text-white px-4 py-2 rounded-md font-semibold transition-all duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          )}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
