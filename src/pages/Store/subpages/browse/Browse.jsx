import React, { useState } from "react";
import "./browse.css";
import { Genres } from "../../../../components";
import BrowseBar from "./components/browseBar/BrowseBar";
import BrowseContainer from "./components/browseContainer/BrowseContainer";
import BrowseFilter from "./components/browseFilter/BrowseFilter";
const Browse = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  const handleGenreSelection = (genre) => {
    setSelectedGenre(genre);
  };

  const handlePlatformSelection = (platform) => {
      setSelectedPlatform(platform)
  }

  const tabs = [
    {text: "All Items", value: "-metacritic"},
    {text: "New and Trending", value:"released"},
    {text: "Top Sellers", value:"updated"},
    {text: "Top Rated", value: "-rating"},
    {text: "Popular", value: "popular"},
    {text: "Coming Soon", value:"-released"}
  ]

  console.log(selectedPlatform)

  const ordering = tabs?.find(tabz =>  {
    if(tabz.text === selectedTab) {
     return tabz
    }
  })
  return (
    <div id="browse">
      <div className="browse-inner inner-container">
        <section className="browse-categories">
          <h1>Top Categories</h1>
          <Genres />
        </section>
        <section className="browse-steam">
          <h1>Browse Steam</h1>
          <div className="browse-bar">
            <BrowseBar selectedTab={handleSelectedTab} />
          </div>
          <div className="browse-game-container">
            <aside className="browse-filter">
              <BrowseFilter genreSelected={handleGenreSelection} platformSelected={handlePlatformSelection} />
            </aside>
            <div className="browse-games">
              <BrowseContainer
                tab={ordering}
                selectedGenre={selectedGenre}
                selectedPlatform={selectedPlatform}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Browse;
