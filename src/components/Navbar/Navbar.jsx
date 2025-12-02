import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/NavbarTopBar/logo.png";
import hamburgerMenu from "../../assets/images/NavbarTopBar/menu-burger-horizontal-svgrepo-com.png";
import closeMenu from "../../assets/images/NavbarTopBar/close-svgrepo-com.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);


  const onClick = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
  }


  return (
    <>
      <nav className="navbar-desktop-navbar">
        <div className="navbar-container">

          {/* Logo */}
          <div className="navbar-logo">
            <img src={logo} alt="Company Logo" />
          </div>

          <div className="navbar-hamburger" onClick={onClick}>
            <img src={hamburgerMenu} alt="Menu" />
          </div>

          {/* Menu Links */}
          {
            <ul className="navbar-links">
              <li><a href="/">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blogs</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          }

          {/* CTA Button */}
          <a href="#contact" className="navbar-btn">
            Contact Us
          </a>
        </div>
      </nav>





      <nav className="navbar-mobile-navbar">
        <div className="navbar-container">

          {/* Logo */}
          <div className="navbar-logo">
            <img src={logo} alt="Company Logo" />
          </div>


          {menuOpen ? (
            <div className="close-Menu" onClick={onClick}>
              <img src={closeMenu} alt="Close Menu" />
            </div>
          ) : (
            <div className="navbar-hamburger" onClick={onClick}>
              <img src={hamburgerMenu} alt="Menu" />
            </div>
          )}

          {/* Menu Links */}
          {
            menuOpen && <ul className="navbar-links">
              <li><a href="/">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blogs</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#contact" className="navbar-btn-contact">
                Contact Us
              </a></li>
            </ul>
          }

        </div>
      </nav>

    </>
  );
};

export default Navbar;
