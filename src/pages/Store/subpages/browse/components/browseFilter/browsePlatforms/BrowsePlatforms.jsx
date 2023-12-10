import React from 'react'
import { useState } from 'react'
import {usePlatforms} from "../../../../../../../hooks/usePlatforms"
const BrowsePlatforms = ({platformSelected}) => {
  const {data: platforms, isLoading: platformsLoading, error: platformsError} = usePlatforms()
  const [selectedPlatform, setSelectedPlatform] = useState([])
  const [platformsMore, setPlatformsMore] = useState(null)
  const [searchedPlatform, setSearchedPlatform] = useState(null)

  const handlePlatformChange = (e) => {
    const searched = e.target.value;
  setSearchedPlatform(searched);

  if (searched !== null && searched !== "") {
    setPlatformsMore(true);
  } else {
    setPlatformsMore(false);
  }
  }

  const handlePlatformsMore = () => {
    setPlatformsMore(prev => !prev)
  }
const handlePlatformClick = (platform) => {
  if(selectedPlatform.includes(platform)) {
    return
  }
  const updatedPlatforms = [...selectedPlatform, platform]
  setSelectedPlatform(updatedPlatforms)
  platformSelected(updatedPlatforms.map((g) => g.id))
}

const handleRemovePlatforms = (platform) => {
  const removePlatform = selectedPlatform.filter(plat => plat !== platform)
  setSelectedPlatform(removePlatform)
  platformSelected(removePlatform)
}


const handlePlatformClear = () => {
  setSelectedPlatform([])
  platformSelected([])
}
  return (
    <div className="browse-platforms">
    <h4 className="Large">Platforms</h4>
    <input 
    type="text"
    name="plaforms"
    id="platforms-input"
    placeholder="Search for a platform..."
    onChange={handlePlatformChange}
    />
    <hr />
    <div
      className={`selected-items ${selectedPlatform === null ? "none" : ""}`}
    >
      {selectedPlatform?.map((platform) => (
        <button className="small" key={platform.id}>
          {platform.name} <span onClick={() => handleRemovePlatforms(platform)}>x</span>
        </button>
      ))}
      {selectedPlatform.length > 0 ? (
        <span className="small" onClick={handlePlatformClear}>
          Clear Platforms
        </span>
      ) : (
        ""
      )}
    </div>
    <div className="items-list">
      <ul className={platformsMore ? "more-enabled-platforms " : "max-height"}>
        {searchedPlatform ? (
          platforms?.filter(plat => plat.name.toLowerCase().includes(searchedPlatform.toLowerCase())).map(platform => (
            <li  key={platform.name}>
              <div className="item" onClick={() => handlePlatformClick(platform)}>
              <img src={`/assets/platforms/${platform.slug}.png`} alt="platform" />
                <span className="small">{platform.name}</span>
            </div>
            </li>
          ))
        ) : (
          platforms?.map(platform => (
            <li  key={platform.name}>
              <div className="item" onClick={() => handlePlatformClick(platform)}>
              <img src={`/assets/platforms/${platform.slug}.png`} alt="platform" />
                <span className="small">{platform.name}</span>
            </div>
            </li>
          ))
        )}
      </ul>
      <div className="platforms-see">
        {platformsMore ? (
          <button className="more-button small" onClick={handlePlatformsMore}>
            See Less
          </button>
        ) : (
          <button className="more-button small" onClick={handlePlatformsMore}>
            See More
          </button>
        )}
      </div>
    </div>
  </div>
  )
}

export default BrowsePlatforms