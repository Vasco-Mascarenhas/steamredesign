import React from "react";
import "./browsecontainer.css";
import { useBrowseGames } from "../../../../../../hooks/useBrowseGames";
import { getCroppedImg } from "../../../../../../helpers/getCroppedImg";
const BrowseContainer = ({ tab, selectedGenre }) => {
  const { data, isLoading, error } = useBrowseGames({
    genres: selectedGenre,
  });

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="browse-container">
      {data.map((game) => (
        <div className="browse-game" key={game.name}>
          <div className="browse-game-image">
            <img src={getCroppedImg(game.background_image)} alt="game image" />
          </div>
          <div className="browse-game-body">
            <div className="browse-game-meta">
              <h4>{game.name}</h4>
              <div className="browse-game-genres">
                {game.genres.map((genre) => (
                  <div className="game-genre">
                    <span>{genre.name}</span>
                  </div>
                ))}
              </div>
              <div className="platforms">
                {game.platforms.map((platform) => (
                  <div className="platform">
                    <img
                      src={`/assets/platforms/${platform.platform.slug.toLowerCase()}.png`}
                      alt="game platform"
                    />
                  </div>
                ))}
              </div>
              <div className="browse-game-release">
                <span>{game.released}</span>
              </div>
              <div className="gameintro-rating">
                <div className="gameintro-rating-total">
                  <span>Rating</span>
                  <h4>
                    {game.rating} / {game.rating_top}
                  </h4>
                </div>
                <div className="gameintro-ratings">
                  {game.ratings.map((rating) => (
                    <div className="rating" key={rating.id}>
                      <p>{rating.title}:</p> <span>{rating.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrowseContainer;
