import React from "react";
import "./search.css";
const Search = ({ placeholder }) => {
  return (
    <input type="text" name="search" id="search" placeholder={placeholder} />
  );
};

export default Search;
