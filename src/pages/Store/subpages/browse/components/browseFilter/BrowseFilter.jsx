import React, { useState } from "react";
import "./browsefilter.css";

import BrowseGenres from "./browseGenres/BrowseGenres";
import BrowsePlatforms from "./browsePlatforms/BrowsePlatforms";
import BrowseDevelopers from "./browseDevelopers/BrowseDevelopers";
import BrowsePublishers from "./browsePublishers/BrowsePublishers";
import filterImg from "/assets/constants/filter.png"
const BrowseFilter = ({ genreSelected, platformSelected, developerSelected, publisherSelected }) => {
    const [more, setMore] = useState(null)
  const handleMore = () => {
    setMore(prev => !prev)
  }
  
  return (
    <>
    <div className="filter-mobile">
      <button onClick={handleMore}>
        <img src={filterImg} alt="filter image" />
        <span>Filters</span>
      </button>
    </div>
    <div className={`browsefilter ${more ? "filter-open" : ""}`}>
      <h3 className="medium">FILTERS</h3>
        <BrowseGenres genreSelected={genreSelected} />
        <BrowsePlatforms platformSelected={platformSelected} />
        <BrowseDevelopers developerSelected={developerSelected} />
        <BrowsePublishers  publisherSelected={publisherSelected}/>
    </div>
    </>
  );
};

export default BrowseFilter;
