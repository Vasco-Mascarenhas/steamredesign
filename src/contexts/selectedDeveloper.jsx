import { createContext, useContext, useState } from "react";

const selectedDevelopercontext = createContext();

export function SelectedDeveloperProvider({ children }) {
  const [selectedDeveloper, setSelectedDeveloper] = useState([]);

  const handleDeveloperAdd = (developer) => {
    const developers = [...selectedDeveloper, developer];
    setSelectedDeveloper(developers);
  };

  const handleDeveloperRemove = (developer) => {
    const developers = selectedDeveloper.filter(
      (developers) => developers != developer
    );
    setSelectedDeveloper(developers);
  };

  const handleDeveloperClear = () => {
    setSelectedDeveloper([]);
  };

  return (
    <selectedDevelopercontext.Provider
      value={{
        selectedDeveloper,
        handleDeveloperAdd,
        handleDeveloperRemove,
        handleDeveloperClear,
      }}
    >
      {children}
    </selectedDevelopercontext.Provider>
  );
}

export function useDeveloperContext() {
  return useContext(selectedDevelopercontext);
}
