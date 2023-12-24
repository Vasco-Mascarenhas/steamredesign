import React from "react";
import { usePublishers } from "../../../../../../../hooks/usePublishers";
import { usePublisherContext } from "../../../../../../../contexts/selectedPublisher";
const BrowsePublishers = () => {
  const { data: publishers, isLoading, error } = usePublishers();
  const {
    handlePublisherAdd,
    handlePublisherRemove,
    handlePublisherClear,
    selectedPublisher,
  } = usePublisherContext();
  const handlePublisherChange = (e) => {
    console.log(e.target.value);
  };

  console.log(selectedPublisher);

  return (
    <div className="browse-publishers">
      <h4 className="large">Publishers</h4>
      <input
        type="text"
        name="publishers"
        id="publishers-input"
        placeholder="Search for a platform..."
        onChange={handlePublisherChange}
      />
      <hr />
      <div className="selected-items">
        {selectedPublisher?.map((publisher) => (
          <button className="small" key={publisher.id}>
            {publisher.name}
            <span onClick={() => handlePublisherRemove(publisher)}>x</span>
          </button>
        ))}
        {selectedPublisher?.length > 0 ? (
          <span className="small" onClick={handlePublisherClear}>
            Clear Publishers
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="publishers-list">
        <ul>
          {publishers?.map((publisher) => (
            <li key={publisher.name}>
              <div
                className="item"
                onClick={() => handlePublisherAdd(publisher)}
              >
                <span className="small">{publisher.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrowsePublishers;
