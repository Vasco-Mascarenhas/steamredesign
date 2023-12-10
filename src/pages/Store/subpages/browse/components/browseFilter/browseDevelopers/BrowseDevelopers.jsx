import React from 'react'
import { useDevelopers } from '../../../../../../../hooks/useDevelopers'
import { useState } from 'react'
const BrowseDevelopers = ({developerSelected}) => {
    const {data: developers, isLoading, error} = useDevelopers()
    const [selectedDeveloper, setSelectedDeveloper] = useState([])
    const handleDeveloperChange = (e) => {
        console.log(e.target.value)
    }

    const handleDeveloperClick = (developer) => {
        if(selectedDeveloper.includes(developer)){
            return
        }
        const updatedDevelopers = [...selectedDeveloper, developer]
        setSelectedDeveloper(updatedDevelopers)
        developerSelected(updatedDevelopers.map(up => up.id))
    }


    const handleRemoveDeveloper = (developer) => {
        const remove = selectedDeveloper.filter(dev => dev !== developer)
        setSelectedDeveloper(remove)
        developerSelected(remove.map(r => r.id))
    }


    const handleDevelopersClear = () => {
        setSelectedDeveloper([])
        developerSelected([])
    }
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
                <span onClick={() => handleRemoveDeveloper(developer)}>x</span>
            </button>
        ))}

        {selectedDeveloper.length > 0 ? (
            <span className='small' onClick={handleDevelopersClear}>Clear Developers</span>
        ) : ""}
    </div>
    <div className="developers-list">
        <ul>
            {developers?.map(developer => (
                <li key={developer.name}>
                    <div className="item"  onClick={() => handleDeveloperClick(developer)}>
                    <span className="small">{developer.name}</span>
                    <span className='small games-count'>{developer.games_count}</span>
                </div>
                </li>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default BrowseDevelopers