import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "./featured.css";
import { useFeatured } from "../../../hooks/useFeatured";
import Button from "../../buttons/Button";
import { getCroppedImg } from "../../../helpers/getCroppedImg";
import { useGameContext } from "../../../contexts/selectedGame";
import { Link } from "react-router-dom";
const Featured = () => {
  const { data, isLoading, error } = useFeatured();
  const { setSelectedGame } = useGameContext();
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={15}
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      className="mySwiper"
    >
      {isLoading ? (
        <p>Loading</p>
      ) : (
        data.results.map((featured) => (
          <SwiperSlide key={featured.id}>
            <Link
              to="/gameDetails"
              onClick={() => setSelectedGame(featured.id)}
            >
              <div className="featured-inner">
                <div className="featured-hero">
                  <img src={getCroppedImg(featured.background_image)} alt="" />
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3>{featured.name}</h3>
                    </div>
                    {/* 
                  <div className="featured-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores ipsa, quibusdam omnis nesciunt ab distinctio fugiat
                    voluptatum.
                  </div>
                  
                  */}
                    {/* 
                   <div className="featured-gallery">
                    {featured.short_screenshots.slice(0, 3).map((image) => (
                      <div className="short-img" key={image.id}>
                        <img src={image.image} alt="" />
                      </div>
                    ))}
                  </div> 
                      */}
                    <div className="featured-genres">
                      {featured.genres.map((genre) => (
                        <div className="featured-genre" key={genre.id}>
                          <span>{genre.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="platforms">
                      {featured.parent_platforms.map((platform) => (
                        <div className="platform" key={platform.platform.id}>
                          <img
                            src={`/assets/platforms/${platform.platform.name.toLowerCase()}.png`}
                            alt="platform"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="featured-price">
                      <div className="featured-buy">
                        <div className="price">
                          <span>69.42$</span>
                        </div>
                        <div className="featured-buy-btn">
                          <Button type={"buy"} text="Buy Now" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default Featured;
