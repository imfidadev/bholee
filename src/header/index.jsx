import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { logo } from "../assets/images/images";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        {/* <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div> */}
        {/* <ul className={`nav-links ${isOpen ? "active" : ""}`}> */}
        <ul>
          <li>
            {" "}
            <NavLink>Home</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink>Events</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink>New</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink>About</NavLink>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
