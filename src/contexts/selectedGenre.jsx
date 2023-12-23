import { createContext, useContext, useState } from "react";


const selectedGenreContext = createContext()

export function SelectedGenreProvider({children}) {
    const [selectedGenre, setSelectedGenre] = useState([])

    const handleGenreAdd = (genre) => {
      if(!selectedGenre.includes(genre)) {
        const genres = [...selectedGenre, genre]
        setSelectedGenre(genres)
      } 
    }

    const handleGenreRemove = (genre) => {
      const remove = selectedGenre.filter(remove => remove != genre)
      setSelectedGenre(remove)
    }

    const handleGenreClear = () => {
      setSelectedGenre([])
    }

    return (
      <selectedGenreContext.Provider value={{selectedGenre, setSelectedGenre, handleGenreAdd, handleGenreRemove, handleGenreClear}}>
        {children}
      </selectedGenreContext.Provider>
    )
}

export function useGenreContext() {
    return useContext(selectedGenreContext)
}

// now do the same for developers and publishers so users can click them while in the gamdetails page