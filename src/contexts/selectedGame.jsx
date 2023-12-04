import { createContext, useContext, useState } from "react";

const selectedGameContext = createContext();

export function SelectedGameProvider({ children }) {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <selectedGameContext.Provider value={{ selectedGame, setSelectedGame }}>
      {children}
    </selectedGameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(selectedGameContext);
}
