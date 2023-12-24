import { createContext, useContext, useState } from "react";

const selectedPublisherContext = createContext();

export function SelectedPublisherProvider({ children }) {
  const [selectedPublisher, setSelectedPublisher] = useState([]);

  const handlePublisherAdd = (publisher) => {
    const publishers = [...selectedPublisher, publisher];
    setSelectedPublisher(publishers);
  };

  const handlePublisherRemove = (publisher) => {
    const publishers = selectedPublisher.filter(
      (publishers) => publishers != publisher
    );
    setSelectedPublisher(publishers);
  };

  const handlePublisherClear = () => {
    setSelectedPublisher([]);
  };

  return (
    <selectedPublisherContext.Provider
      value={{
        selectedPublisher,
        handlePublisherAdd,
        handlePublisherRemove,
        handlePublisherClear,
      }}
    >
      {children}
    </selectedPublisherContext.Provider>
  );
}

export function usePublisherContext() {
  return useContext(selectedPublisherContext);
}
