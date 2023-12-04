import React from "react";
import { useGameDetails } from "../../../../hooks/useGameDetails";
import GameBar from "./components/gameBar/GameBar";
import "./gamedetails.css";
import GameIntro from "./components/gameIntro/GameIntro";
import GameLanguage from "./components/gameLanguage/GameLanguage";
import GameAchievements from "./components/gameAchievements/GameAchievements";
import GameLinks from "./components/gameLinks/GameLinks";
import GamePrice from "./components/gamePrice/GamePrice";
import GameAbout from "./components/gameAbout/GameAbout";
import GameRequirements from "./components/gameRequirements/GameRequirements";
import { Loader, Trending } from "../../../../components";
import { useGameContext } from "../../../../contexts/selectedGame";
const GameDetails = () => {
  const { selectedGame } = useGameContext();
  const { data, isLoading, error } = useGameDetails({
    selectedGame: selectedGame,
  });
  const handleImageError = (e) => {
    e.target.src = "/assets/tags/singleplayer.png";
  };

  if (isLoading) return <Loader />;
  return (
    <div
      id="gamedetails"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #202b3c 30%, #202b3c 100%),url(${data.background_image})`,
      }}
    >
      <div className="gamedetails-container inner-container">
        <GameBar gameName={data.name} />

        <div className="gameintro">
          <GameIntro game={data} />
        </div>
        <div className="gamedetails-content">
          <div className="gamedetails-main">
            <div className="gamedetails-price box">
              <GamePrice game={data} platforms={data.platforms} />
            </div>
            <div className="gamedetails-dlc box">
              <GamePrice game={data} platforms={data.platforms} />
            </div>
            <div className="gamedetails-about box">
              <GameAbout game={data} />
            </div>
            <div className="gamedetails-requirements box">
              <GameRequirements game={data.platforms} />
            </div>
            <div className="gamedetails-related"></div>
          </div>
          <aside className="gamedetails-aside">
            <div className="gamedetails-features box">
              <h3>Features</h3>
              <div className="gamedetails-feature-container">
                {data.tags.slice(0, 6).map((tag) => (
                  <div className="gamedetails-feature" key={tag.id}>
                    <img
                      onError={handleImageError}
                      src={`/assets/tags/${tag.slug}.png`}
                      alt="tag"
                    />
                    <h5 className="small">{tag.name}</h5>
                  </div>
                ))}
              </div>
            </div>
            <div className="gamedetails-languages box">
              <GameLanguage />
              <p className="medium">See all 14 supported languages</p>
            </div>

            <div className="gamedetails-achievements box">
              <h3>Achievements</h3>
              <GameAchievements />
            </div>
            <div className="gamedetails-links box">
              <h3>Links</h3>
              <GameLinks />
            </div>
          </aside>
        </div>
        <div className="gamedetails-related">
          <h2>Related Games</h2>
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
