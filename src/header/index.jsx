import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { logo } from "../assets/images/images";
import { scrollToTop } from "../common/ScrollToTop";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
    scrollToTop();
  };
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={closeMenu}>
              Events
            </NavLink>{" "}
            <span>New</span>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
