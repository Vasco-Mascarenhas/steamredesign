import React from "react";
import "./gamebar.css";
import { Button } from "../../../../../../components";
const GameBar = ({ gameName }) => {
  return (
    <div className="gamebar">
      <h2>{gameName}</h2>
      <div className="gamebar-buttons">
        <button className="ignore">Ignore</button>
        <button className="follow">Follow</button>
        <Button type="wishlistBtn" text="WishList" />
        <button className="generic">Browse All DLCs</button>
        <button className="generic">Community Hub</button>
      </div>
    </div>
  );
};

export default GameBar;
