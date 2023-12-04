import React from "react";
import "./gameabout.css";
const GameAbout = ({ game }) => {
  return (
    <div className="game-about">
      <h3>About {game.name}</h3>
      <div className="game-about-img">
        <img src={game.background_image_additional} alt="game image" />
      </div>
      <div className="game-about-description large">{game.description_raw}</div>
    </div>
  );
};

export default GameAbout;
