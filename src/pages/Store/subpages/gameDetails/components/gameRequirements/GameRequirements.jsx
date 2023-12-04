import React, { useState } from "react";
import "./gamerequirements.css";
const GameRequirements = ({ game, platforms }) => {
  const [clicked, setClicked] = useState("PC");
  console.log(clicked);
  return (
    <div className="game-requirements">
      <div className="requirements-selection">
        <h3>System Requirements</h3>
        <div className="selection-buttons">
          {game.slice(0, 3).map((req) => (
            <button
              key={req.platform.name}
              onClick={() => setClicked(req.platform.name)}
              className={`selection-btn ${
                req.platform.name === clicked ? "active-selection" : ""
              }`}
            >
              {req.platform.name}
            </button>
          ))}
        </div>
      </div>
      <div className="game-requirements-content">
        {game
          .filter((req) => req.platform.name === clicked)
          .map((req, index) =>
            req.requirements && Object.keys(req.requirements).length > 0 ? (
              <div className="requirement" key={index}>
                <p key={"minimum"}>{req.requirements.minimum}</p>
                <p key={"recommended"}>{req.requirements.recommended}</p>
              </div>
            ) : (
              <p key={"None"}>Just have one</p>
            )
          )}
      </div>
    </div>
  );
};

export default GameRequirements;
