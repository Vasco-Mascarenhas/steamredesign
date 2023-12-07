import React from 'react'
import { useState } from 'react';
import { useGenres } from '../../../../../../../hooks/useGenres';
import "./browsegenres.css"
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
        genreSelected(removeGenre.map((r) => r.toLowerCase()));
      };
    
      const handleGenreClick = (genre) => {
        if (selectedGenre.includes(genre)) {
          return;
        }
        const updatedGenres = [...selectedGenre, genre];
        setSelectedGenre(updatedGenres);
        genreSelected(updatedGenres.map((g) => g.toLowerCase().replace(" ", "-")));
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
      className={`selectedGenres ${selectedGenre === null ? "none" : ""}`}
    >
      {selectedGenre?.map((genre) => (
        <button className="small" key={genre}>
          {genre} <span onClick={() => handleRemoveGenre(genre)}>x</span>
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
      <ul className={genresMore ? "genres-more-enabled" : ""}>
        {isLoading ? (
          <p>Loading...</p>
        ) : searchedGenre ? (
          genres.filter(genres => genres.name.toLowerCase().includes(searchedGenre.toLowerCase())).map(genre => (
            <div
              className="genre"
              key={genre.name}
              onClick={() => handleGenreClick(genre.name)}
            >
              <span className="small">{genre.name}</span>
            </div>
          ))
        ) : (
          genres.map((genre) => (
            <div
              className="genre"
              key={genre.name}
              onClick={() => handleGenreClick(genre.name)}
            >
              <span className="small">{genre.name}</span>
            </div>
          ))
        )}
      </ul>
      <div className="genres-see">
        {genresMore ? (
          <button className="genres-more small" onClick={handleGenresMore}>
            See Less
          </button>
        ) : (
          <button className="genres-more small" onClick={handleGenresMore}>
            See More
          </button>
        )}
      </div>
    </div>
  </div>
  )
}

export default BrowseGenres