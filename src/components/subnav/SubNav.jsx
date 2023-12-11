import React from "react";
import "./subnav.css";
import Search from "../search/Search";
import { NavLink } from "react-router-dom";
const SubNav = () => {
  const subLinks = [
    { text: "Home", link: "/" },
    { text: "Browse", link: "/Browse" },
    { text: "Discover", link: "/Discover" },
    { text: "Points Shop", link: "/Points" },
    { text: "Curators", link: "/Curators" },
    { text: "Gift Cards", link: "/Gift" },
    { text: "News", link: "/News" },
  ];

  return (
    <nav className="subnav container">
      <div className="sub-links">
        <ul>
          {subLinks.map((sub) => (
            <NavLink to={sub.link} key={sub.text}>
              <li className="sublink">{sub.text}</li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="sub-search">
        <Search placeholder="Search..." />
      </div>

      <div className="cart">
        <ul>
          <li className="sublink">WishList</li>
          <NavLink to="Cart">
          <li className="sublink">Cart</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default SubNav;
