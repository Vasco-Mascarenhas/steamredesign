import React, { useState } from 'react'
import { usePublishers } from '../../../../../../../hooks/usePublishers'
const BrowsePublishers = ({publisherSelected}) => {
    const {data: publishers, isLoading, error} = usePublishers()
    const [selectedPublisher ,setSelectedPublisher] = useState([])

    const handlePublisherChange = (e) => {
        console.log(e.target.value)
    }

    const handlePublisherClick = (publisher) => {
        if(selectedPublisher.includes(publisher)) {
            return
        }
        const updatedPublishers = [...selectedPublisher, publisher]
        setSelectedPublisher(updatedPublishers)
        publisherSelected(updatedPublishers.map(p => p.id))
    }


    const handlePublisherRemove = (publisher) => {
        const remove = selectedPublisher.filter(re => re !== publisher)
        setSelectedPublisher(remove)
        publisherSelected(remove.map(r => r.id))
    }


    const handlePublisherClear = () => {
        setSelectedPublisher([])
        publisherSelected([])
    }
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
        {selectedPublisher?.map(publisher => (
            <button className="small" key={publisher.id}>
                {publisher.name}
                <span onClick={() => handlePublisherRemove(publisher)}>x</span>
            </button>
        ))}
        {selectedPublisher.length > 0 ? (
            <span className='small' onClick={handlePublisherClear}>Clear Publishers</span>
        ) : ""}
    </div>
    <div className="publishers-list">
        <ul>
            {publishers?.map(publisher => (
                <li key={publisher.name}>
                    <div className="item"  onClick={() => handlePublisherClick(publisher)}>
                    <span className='small'>{publisher.name}</span>
                </div>
                </li>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default BrowsePublishers