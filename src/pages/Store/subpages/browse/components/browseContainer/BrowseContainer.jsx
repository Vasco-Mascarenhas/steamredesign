import React, { useState, useEffect } from "react";
import "./browsecontainer.css";
import { useBrowseGames } from "../../../../../../hooks/useBrowseGames";
import { getCroppedImg } from "../../../../../../helpers/getCroppedImg";
import Button from "../../../../../../components/buttons/Button"
import { useGameContext } from "../../../../../../contexts/selectedGame";
import { Link } from "react-router-dom";
import { useCart } from "../../../../../../contexts/cartContext";
import GamePlaceholder from "./components/gameplaceholder/GamePlaceholder";
const BrowseContainer = ({ tab, selectedGenre, selectedPlatform, selectedDeveloper, selectedPublisher }) => {
  const {setSelectedGame} = useGameContext()
  const {addToCart} = useCart()
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error } = useBrowseGames({
    genres: selectedGenre,
    platforms: selectedPlatform,
    developers: selectedDeveloper,
    publishers: selectedPublisher,
    ordering:tab?.value,
    currentPage: currentPage
  });
  const handlePage = (action) => {
    if(action === "Next") {
      setCurrentPage(prev => prev + 1)
      
    } 
    if(action === "Previous" && currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }


    const pageHeight = window.innerHeight;
    const pos = (document.body.scrollHeight - pageHeight) * (20 / 100) 

    window.scroll({
      top:pos,
      behavior: "smooth"
    });
   
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedGenre, tab]);

  const handlePlatformError = (e) => {
    e.target.src = "/assets/constants/question.png"
  }

  const placeholders = [];

  if (isLoading) {
    for (let i = 0; i < 12; i++) {
      placeholders.push(<GamePlaceholder key={i} />);
    }
  }
  
  
  if (error) return <p>Error</p>;
  return (
    <div className="browse-container">
      {isLoading ? (
        placeholders
      ) : (
        data?.map((game) => (
       
          <div className="browse-game" key={game.name}>
          <div className="browse-game-image">
            <Link to="/gameDetails" onClick={() => setSelectedGame(game.id)}>
            <img src={getCroppedImg(game.background_image)} alt="game image" />
            </Link>
          </div>
          <div className="browse-game-body">
            <div className="browse-game-meta">
              <Link to="/gameDetails" onClick={() => setSelectedGame(game.id)}>
              <h4>{game.name}</h4>
              </Link>
              <div className="tags-container">
                {game.genres.map((genre) => (
                  <div className="tag" key={genre.name}>
                    <span>{genre.name}</span>
                  </div>
                ))}
              </div>
              <div className="platforms">
             {game.platforms.map((platform, index) => (
              <div className="platform" key={index}>
                  <img
                src={`/assets/platforms/${platform.platform.slug}.png`}
                alt="game platform"
                onError={handlePlatformError}
              />
            </div>
             ))}
              </div>
              <div className="browse-game-release">
                <span>{game.released}</span>
              </div>
              <div className="browse-rating">
                <div className="rating-total">
                  <span>Rating</span>
                  <h4>
                    {game.rating} / {game.rating_top}
                  </h4>
                </div>
                <div className="ratings">
                  {game.ratings.map((rating) => (
                    <div className="rating" key={rating.id}>
                      <p>{rating.title}:</p> <span>{rating.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="browse-game-cart">
                    <div className="browse-wishlist">
                    <svg width="23" height="22" viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg">
  
  <path d="M11.5 4.68569C13.1082 2.80328 16.0872 2.03569 18.4996 3.68052C19.7789 4.55776 20.5831 6.03811 20.6379 7.59156C20.7567 11.1371 17.6224 13.979 12.825 18.3286C12.03 19.0597 10.9608 19.0597 10.2664 18.4291L10.175 18.3469C5.37756 13.9881 2.23411 11.1462 2.36204 7.60069C2.41687 6.03811 3.22101 4.55776 4.50032 3.68052C6.91273 2.02656 9.8917 2.80328 11.5 4.68569Z" fill="transparent" />


  <path d="M18.4996 3.68052C16.0872 2.03569 13.1082 2.80328 11.5 4.68569C9.8917 2.80328 6.91273 2.02656 4.50032 3.68052C3.22101 4.55776 2.41687 6.03811 2.36204 7.60069C2.23411 11.1462 5.37756 13.9881 10.175 18.3469L10.2664 18.4291C10.9608 19.0597 12.03 19.0597 12.7245 18.42L12.825 18.3286C17.6224 13.979 20.7567 11.1371 20.6379 7.59156C20.5831 6.03811 19.7789 4.55776 18.4996 3.68052ZM11.5914 16.9853L11.5 17.0767L11.4086 16.9853C7.05894 13.0469 4.18963 10.4426 4.18963 7.80173C4.18963 5.97414 5.56032 4.60345 7.3879 4.60345C8.79514 4.60345 10.1658 5.50811 10.6501 6.76H12.3589C12.8341 5.50811 14.2048 4.60345 15.612 4.60345C17.4396 4.60345 18.8103 5.97414 18.8103 7.80173C18.8103 10.4426 15.941 13.0469 11.5914 16.9853Z" fill="#F3F3F3"/>
</svg>

                    </div>
                    <div className="browse-addtocart">
                          <div className="price">
                            <span>42.69$</span>
                          </div>
                        <Button type="addtocart" text="Add to Cart" onBtnClick={() => addToCart(game)} />
                    </div>



            </div>
          </div>
        </div>
      ))
      )}
      <div className="page-selection">
      <button className={`${currentPage > 1 ? "selection-button" : "inactivePage"}`} onClick={() => handlePage("Previous")}>Previous</button>
       
        {currentPage}
        <button className="selection-button" onClick={() => handlePage("Next")}>Next</button>
      </div>
    </div>
  );
};

export default BrowseContainer;
