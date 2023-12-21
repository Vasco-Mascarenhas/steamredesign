import React from "react";

import "./browsebar.css";
import { Button } from "../../../../../../components";
import { useState } from "react";
const BrowseBar = ({ selectedTab }) => {
  const [active, setActive] = useState("All Items");
  const tabs = [
    "All Items",
    "New and Trending",
    "Top Sellers",
    "Top Rated",
    "Popular",
    "Coming Soon",
  ];

  const handleTabClick = (tab) => {
    setActive(tab);
    selectedTab(tab);
  };
  return (
    <div className="browsebar">
      <div className="tab-selection">
        <ul className="tabs">
          {tabs.map((tab) => (
            <li className="tab" key={tab}>
              <button
                onClick={() => handleTabClick(tab)}
                className={active === tab ? "active" : ""}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrowseBar;
