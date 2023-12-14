import React from 'react'
import "./interest.css"
import { getCroppedImg } from '../../../../../../helpers/getCroppedImg'
import { Button } from '../../../../../../components'
const Interest = ({game, onAddClick}) => {
    const handleClick = (game) => {
        onAddClick(game)
    }
  return (
    <div className="interest-card" key={game.name}>
        <div className="interest-image">
            <img src={getCroppedImg(game.background_image)} alt={game.name} />
        </div>
        <div className="interest-title">
            <h4>{game.name}</h4>
        </div>
        <div className="interest-content">
        <div className="platforms">
            {game.platforms.slice(0, 5).map(platform => (
                <div className="platform">
                        <img src={`/assets/platforms/${platform.platform.slug}.png`} alt={platform.platform.name} />
                </div>
            ))}
        </div>
        <div className="interest-price">
                <span>50$</span>
                <Button type="addtocart" text="Add To Cart" onBtnClick={() => handleClick(game)} />
        </div>
        </div>
    </div>
  )
}

export default Interest