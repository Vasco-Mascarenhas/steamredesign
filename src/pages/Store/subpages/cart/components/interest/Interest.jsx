import React from 'react'
import "./interest.css"
import { getCroppedImg } from '../../../../../../helpers/getCroppedImg'
import { Button } from '../../../../../../components'
import { useGameContext } from '../../../../../../contexts/selectedGame'
import { Link } from 'react-router-dom'
const Interest = ({game, onAddClick}) => {
    const {setSelectedGame} = useGameContext()
    const handleClick = (game) => {
        onAddClick(game)
    }
  return (
    <div className="interest-card" key={game.name}>
        <div className="interest-image">
           <Link to="/gameDetails" onClick={() => setSelectedGame(game.id)}>
           <img src={getCroppedImg(game.background_image)} alt={game.name} />
           </Link>
        </div>
        <div className="interest-title">
            <Link to="/gameDetails" onClick={() => setSelectedGame(game.id)}>
            <h4>{game.name}</h4>
            </Link>
        </div>
        <div className="interest-content">
        <div className="platforms">
            {game.platforms.slice(0, 5).map(platform => (
                <div className="platform" key={platform.platform.slug}>
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