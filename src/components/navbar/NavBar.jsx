import React from "react";
import "./navbar.css";
import logo from "/assets/constants/logo.svg";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const navlinks = [
    { text: "store", link: "/" },
    { text: "community", link: "/community" },
    { text: "user", link: "/user" },
    { text: "library", link: "/library" },
    { text: "downloads", link: "/downloads" },
  ];

  return (
    <nav className="navbar container">
      <div className="nav-logo">
        <img src={logo} alt="steam" />
      </div>
      <div className="nav-links">
        <ul>
          {navlinks.map((navlink) => (
            <NavLink key={navlink.text} to={navlink.link}>
              <li className="large navlink" key={navlink.text}>
                {navlink.text}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
