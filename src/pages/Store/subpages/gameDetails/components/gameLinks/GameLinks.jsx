import React from "react";
import "./gamelinks.css";
const GameLinks = () => {
  return (
    <div className="game-links">
      <ul>
        <li>Workshop</li>
        <li>Discussions</li>
        <li>News</li>
        <li>Updates</li>
        <li>Community Groups </li>
        <li>Marketplace</li>
      </ul>
      <div className="game-links-buttons">
        <button>Share</button>
        <button>Embed</button>
        <button>Report</button>
      </div>
    </div>
  );
};

export default GameLinks;
