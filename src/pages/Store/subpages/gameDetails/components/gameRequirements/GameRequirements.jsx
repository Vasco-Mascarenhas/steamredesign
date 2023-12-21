import React, { useState } from "react";
import "./gamerequirements.css";
const GameRequirements = ({ game }) => {
  const [clicked, setClicked] = useState("PC");
  // gotta know a better way of displaying the platforms/requirements, for now just gonna force PC
  return (
    <div className="game-requirements">
      <div className="requirements-selection">
        <h3>System Requirements</h3>
        <div className="selection-buttons">
          {game.filter(req => req.platform.name === "PC").map((req) => (
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
          .filter((req) => req.platform.name === "PC")
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
