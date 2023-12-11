import React from "react";
import "./gameprice.css";
import { Button } from "../../../../../../components";
import { addToCart } from "../../../../../../helpers/cart";
const GamePrice = ({ game, platforms }) => {
  console.log(game);

  return (
    <div className="game-price">
      <div className="game-price-name">
        <h2>{game.name}</h2>
        <p>WEEKEND DEAL! Offer ends 02 April</p>
      </div>
      <div className="game-price-details">
        <div className="game-price-platform">
          {platforms?.map((platform) => (
            <div className="price-platform" key={platform.platform.name}>
              <img
                src={`/assets/platforms/${platform.platform.slug.toLowerCase()}.png`}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="price-details">
          <div className="price-discount">-69%</div>
          <div className="price-new">
            <span className="old-price">$34.99</span>
            <span className="new-price">$23.09</span>
          </div>
          <div className="price-cart">
            <Button type="addtocart" onBtnClick={() => addToCart(game) } text="Add to Cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePrice;
