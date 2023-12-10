import React, { useState } from "react";
import "./browsefilter.css";

import BrowseGenres from "./browseGenres/BrowseGenres";
import BrowsePlatforms from "./browsePlatforms/BrowsePlatforms";
import BrowseDevelopers from "./browseDevelopers/BrowseDevelopers";
import BrowsePublishers from "./browsePublishers/BrowsePublishers";
const BrowseFilter = ({ genreSelected, platformSelected, developerSelected, publisherSelected }) => {
  
  
  
  return (
    <div className="browsefilter">
      <h3 className="medium">FILTERS</h3>
        <BrowseGenres genreSelected={genreSelected} />
        <BrowsePlatforms platformSelected={platformSelected} />
        <BrowseDevelopers developerSelected={developerSelected} />
        <BrowsePublishers  publisherSelected={publisherSelected}/>
    </div>
  );
};

export default BrowseFilter;
