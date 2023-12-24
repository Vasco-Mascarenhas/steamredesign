import React from "react";
import { useDevelopers } from "../../../../../../../hooks/useDevelopers";
import { useDeveloperContext } from "../../../../../../../contexts/selectedDeveloper";
const BrowseDevelopers = () => {
  const { data: developers, isLoading, error } = useDevelopers();
  const {
    selectedDeveloper,
    handleDeveloperAdd,
    handleDeveloperRemove,
    handleDeveloperClear,
  } = useDeveloperContext();
  const handleDeveloperChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="browse-developers">
      <h4>Developers</h4>
      <input
        type="text"
        name="developers"
        id="developers-input"
        placeholder="Search for a developer..."
        onChange={handleDeveloperChange}
      />
      <hr />
      <div className="selected-items">
        {selectedDeveloper.map((developer) => (
          <button className="small" key={developer.id}>
            {developer.name}
            <span onClick={() => handleDeveloperRemove(developer)}>x</span>
          </button>
        ))}

        {selectedDeveloper.length > 0 ? (
          <span className="small" onClick={handleDeveloperClear}>
            Clear Developers
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="developers-list">
        <ul>
          {developers?.map((developer) => (
            <li key={developer.name}>
              <div
                className="item"
                onClick={() => handleDeveloperAdd(developer)}
              >
                <span className="small">{developer.name}</span>
                <span className="small games-count">
                  {developer.games_count}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrowseDevelopers;
