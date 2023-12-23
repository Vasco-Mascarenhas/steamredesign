import React, { useEffect } from 'react'
import { useState } from 'react';
import { useGenres } from '../../../../../../../hooks/useGenres';
import { useGenreContext } from '../../../../../../../contexts/selectedGenre';
const BrowseGenres = ({genreSelected}) => {
    const { data: genres, isLoading, error } = useGenres();
    const {selectedGenre, handleGenreAdd, handleGenreRemove, handleGenreClear} = useGenreContext()
    const [genresMore, setGenresMore] = useState(null)
    const [searchedGenre, setSearchedGenre] = useState(null)

    const handleGenreChange = (e) => {
        const searched = e.target.value;
        setSearchedGenre(searched)
    }
    console.log(selectedGenre)

    const handleGenresMore = () => {
      setGenresMore(prev => !prev)
    }

    useEffect(() => {
      genreSelected(selectedGenre.map(genre => genre.slug))
    }, [selectedGenre])
      // WHEN YOU GET BACK, REMOVE ALL OF THIS SHIT AND MAKE IT ONLY USING THE GENRE CONTEXT. CLEANER BETTER EASIER AND YOU WONT LOOK LIKE A *REDACTED*

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
          {genre.name} <span onClick={() => handleGenreRemove(genre)}>x</span>
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
             
              onClick={() => handleGenreAdd(genre)}
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
              onClick={() => handleGenreAdd(genre)}
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