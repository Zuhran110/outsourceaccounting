"use client";
import React, { useEffect, useState } from "react";
import { HamburgerMenu } from "../../../assets/images/NavbarTopBar/NavbarImg.js";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const onClick = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="w-full px-16 z-1000 bg-white items-center justify-between hidden md:flex ">
        <div className="flex items-center justify-between w-full py-3 mx-3 md:mx-8">
          {/* Logo */}
          <div className="navbar-logo ">
            <img
              src="/images/NavbarTopBar/CompanyLogo.png"
              alt="Company Logo"
            />
          </div>

          {/* Menu Links */}
          {
            <ul className="navbar-link justify-between items-center hidden md:flex ">
              {" "}
              {/*hidden*/}
              <li>
                <Link href="/" className="p-1 pr-3 font-light inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="p-1 pr-3 font-light inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="p-1 pr-3 font-light inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="p-1 pr-3 font-light inline-block"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="p-1 pr-3 font-light inline-block">
                  FAQs
                </Link>
              </li>
            </ul>
          }

          {/* CTA Button */}
          <Link
            href="/contactUs"
            className="navbar-btn bg-(--color-buttonBlue) pr-8 pl-8 pt-2 pb-2 text-white font-semibold border-2 rounded-2xl hidden md:flex"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      <nav className="md:hidden w-full bg-white/98 border-b border-gray-100 shadow-sm">
        <div className="relative w-full px-4 p-8 flex justify-between items-center">
          {/* Logo - Absolute Left */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <img
              src="/images/NavbarTopBar/CompanyLogo.png"
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
            <ul className="flex flex-col items-center bg-[#ecf6fe] absolute top-full left-0 w-full h-screen py-4 shadow-md z-999">
              {/* Corrected Link 1: Text is now centered */}
              <li className="w-full">
                <Link
                  href="/"
                  className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline"
                >
                  Home
                </Link>
              </li>

              {/* Corrected Link 2: Apply text-center to all other links */}
              <li className="w-full">
                <Link
                  href="/services"
                  className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline"
                >
                  Services
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/aboutus"
                  className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline"
                >
                  About Us
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/blogs"
                  className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline"
                >
                  Blogs
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/faqs"
                  className="block w-full text-center py-2 px-4 border-b border-(--color-buttonBlue) text-base text-gray-800 hover:text-gray-600 no-underline"
                >
                  FAQs
                </Link>
              </li>
              <li className="mt-auto mb-8">
                <Link
                  href="/contactUs"
                  className="inline-block border-(--color-buttonBlue) text-white px-4 py-2 rounded-md font-semibold transition-all duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
