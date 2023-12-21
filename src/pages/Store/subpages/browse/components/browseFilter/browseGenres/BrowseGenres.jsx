import React from 'react'
import { useState } from 'react';
import { useGenres } from '../../../../../../../hooks/useGenres';
const BrowseGenres = ({genreSelected}) => {
    const { data: genres, isLoading, error } = useGenres();
    const [searchedGenre, setSearchedGenre] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [genresMore, setGenresMore] = useState(null);
    const handleGenreChange = (e) => {
      const searched = e.target.value
        setSearchedGenre(searched)

        if(searched !== null && searched !== ""){
          setGenresMore(true)
        } else {
          setGenresMore(false)
        }
       
    }
      const handleRemoveGenre = (genre) => {
        const removeGenre = selectedGenre.filter((remove) => remove !== genre);
        setSelectedGenre(removeGenre);
        genreSelected(removeGenre.map((r) => r.slug.toLowerCase()));
      };
    
      const handleGenreClick = (genre) => {
        if (selectedGenre.includes(genre)) {
          return;
        }
        const updatedGenres = [...selectedGenre, genre];
        setSelectedGenre(updatedGenres);
        genreSelected(updatedGenres.map((g) => g.slug.toLowerCase().replace(" ", "-")));
      };
    
      const handleGenresMore = () => {
        setGenresMore((prev) => !prev);
      };
    
      const handleGenreClear = () => {
        setSelectedGenre([]);
        genreSelected([]);
      };
  return (
    <div className="browse-genres">
    <h4 className="large">Genres</h4>
    <input
      type="text"
      name="genres"
      id="genres-input"
      placeholder="Search for a genre..."
      onChange={handleGenreChange}
    />
    <hr />
    <div
      className={`selected-items ${selectedGenre === null ? "none" : ""}`}
    >
      {selectedGenre?.map((genre) => (
        <button className="small" key={genre.name}>
          {genre.name} <span onClick={() => handleRemoveGenre(genre)}>x</span>
        </button>
      ))}
      {selectedGenre.length > 0 ? (
        <span className="small" onClick={handleGenreClear}>
          Clear Genres
        </span>
      ) : (
        ""
      )}
    </div>
    <div className="genres-list">
      <ul className={genresMore ? "more-enabled" : "max-height"}>
        {isLoading ? (
          <p>Loading...</p>
        ) : searchedGenre ? (
          genres.filter(genres => genres.name.toLowerCase().includes(searchedGenre.toLowerCase())).map(genre => (
            <li  key={genre.name}>
              <div
              className="item"
             
              onClick={() => handleGenreClick(genre)}
            >
              <span className="small">{genre.name}</span>
            </div>
            </li>
          ))
        ) : (
          genres.map((genre) => (
            <li  key={genre.name}>
              <div
              className="item"
              onClick={() => handleGenreClick(genre)}
            >
              <span className="small">{genre.name}</span>
            </div>
            </li>
          ))
        )}
      </ul>
      <div className="genres-see">
        {genresMore ? (
          <button className="more-button small" onClick={handleGenresMore}>
            See Less
          </button>
        ) : (
          <button className="more-button small" onClick={handleGenresMore}>
            See More
          </button>
        )}
      </div>
    </div>
  </div>
  )
}

export default BrowseGenres