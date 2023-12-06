import React from "react";
import "./gameintro.css";
import GameSlider from "../gameSlider/GameSlider";
import { getCroppedImg } from "../../../../../../helpers/getCroppedImg";
const GameIntro = ({ game }) => {
  return (
    <div className="gameintro-inner">
      <div className="gameintro-slider">
        <GameSlider gameId={game.id} />
      </div>
      <div className="gameintro-details">
        <div className="gameintro-wallpaper">
          <img
            src={getCroppedImg(game.background_image)}
            alt="game background"
          />
        </div>

        <div className="gameintro-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            qui perspiciatis eius optio, expedita eveniet porro rerum illum
            quas, sint explicabo veniam et aliquam.
          </p>
        </div>
        <div className="gameintro-rating">
          <div className="rating-total">
            <span>Rating</span>
            <h4>
              {game.rating} / {game.rating_top}
            </h4>
          </div>
          <div className="ratings">
            {game.ratings.map((rating) => (
              <div className="rating" key={rating.id}>
                <p>{rating.title}:</p> <span>{rating.percent}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="gameintro-release">
          <span>Release Date</span>
          <h4>{game.released}</h4>
        </div>
        <div className="gameintro-developer">
          <span>Developer</span>
          {game.developers.map((developer, index) => (
            <h4 key={developer.name + index}>{developer.name}</h4>
          ))}
        </div>
        <div className="gameintro-publisher">
          <span>Publisher</span>
          {game.publishers.map((publisher, index) => (
            <h4 key={publisher.name + index}>{publisher.name}</h4>
          ))}
        </div>
        <div className="gameintro-tags">
          <span>Popular Tags</span>
          <div className="gameintro-tags-container">
            {game.genres.map((tags) => (
              <div className="gameintro-tag" key={tags.id}>
                <span>{tags.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameIntro;
