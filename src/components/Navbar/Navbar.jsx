import React, { useEffect, useState } from "react";
//import "./Navbar.css";

import {
  CompanyLogo,
  HamburgerMenu,
  CloseMenu
} from "../../assets/images/NavbarTopBar/NavbarImg.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);


  const onClick = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
  }


  return (
    <>
      <nav className="pt-[10vh] md:pt-[4vh] fixed h-auto w-full top-0 left-0 pl-16 pr-16 z-1000 bg-white flex items-center justify-between hidden md:flex">
        <div className="flex items-center justify-between w-full py-3">

          {/* Logo */}
          <div className="navbar-logo">
            <img src={CompanyLogo} alt="Company Logo" />
          </div>

          {/* Menu Links */}
          {
            <ul className="navbar-link justify-between items-center hidden md:flex">
              <li><a href="/" className="p-1 ">Home</a></li>
              <li><a href="#services" className="p-1 ">Services</a></li>
              <li><a href="#about" className="p-1 ">About Us</a></li>
              <li><a href="#blog" className="p-1 ">Blogs</a></li>
              <li><a href="#faq" className="p-1 ">FAQs</a></li>
            </ul>
          }

          {/* CTA Button */}
          <a href="#contact" className="navbar-btn bg-(--color-buttonBlue) pr-6 pl-6 pt-3 pb-3 text-white font-semibold border-2 rounded-2xl hidden md:flex">
            Contact Us
          </a>
        </div>
      </nav >





      <nav className="flex md:hidden fixed top-[5.6rem] left-0 right-0 h-[8dvh] w-full bg-white/98 border-b border-gray-100 z-[1000] shadow-sm">
        <div className="relative w-full h-full flex items-center px-4">

          {/* Logo - Absolute Left */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="w-20 h-auto"
            />
          </div>

          {/* Hamburger / Close Icon - Absolute Right */}
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
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

              {/* Corrected Link 1: Text is now centered */}
              <li className="w-full">
                <a href="/" className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline">
                  Home
                </a>
              </li>

              {/* Corrected Link 2: Apply text-center to all other links */}
              <li className="w-full">
                <a href="#services" className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline">
                  Services
                </a>
              </li>
              <li className="w-full">
                <a href="#about" className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline">
                  About Us
                </a>
              </li>
              <li className="w-full">
                <a href="#blog" className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline">
                  Blogs
                </a>
              </li>
              <li className="w-full">
                <a href="#faq" className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline">
                  FAQs
                </a>
              </li>
              <li className="mt-auto mb-8">
                <a
                  href="#contact"
                  className="inline-block border-(--color-buttonBlue) text-white px-4 py-2 rounded-md font-semibold transition-all duration-200"
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
