import React, { useState } from "react";
import "./browsefilter.css";

import BrowseGenres from "./browseGenres/BrowseGenres";
import BrowsePlatforms from "./browsePlatforms/BrowsePlatforms";
const BrowseFilter = ({ genreSelected, platformSelected }) => {
  

  
  return (
    <div className="browsefilter">
      <h3 className="medium">FILTERS</h3>
        <BrowseGenres genreSelected={genreSelected} />
        <BrowsePlatforms platformSelected={platformSelected} />
    </div>
  );
};

export default BrowseFilter;
