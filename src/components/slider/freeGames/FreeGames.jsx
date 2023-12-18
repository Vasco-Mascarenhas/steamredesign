import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useFreeGames } from "../../../hooks/useFreeGames";
import "swiper/css";
import "swiper/css/pagination";
import "./freegames.css";
import Button from "../../buttons/Button";
import { getCroppedImg } from "../../../helpers/getCroppedImg";
import { Link } from "react-router-dom";
import { useGameContext } from "../../../contexts/selectedGame";
const Featured = () => {
  const { data, isLoading, error } = useFreeGames();
  const { setSelectedGame } = useGameContext();
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      loop
      breakpoints={{
        600: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      {isLoading ? (
        <p>Loading</p>
      ) : (
        data.results.map((free) => (
          <SwiperSlide key={free.id}>
            <Link to="/gameDetails" onClick={() => setSelectedGame(free.id)}>
              <div className="free-inner">
                <div className="free-hero">
                  <img
                    className="hero"
                    src={getCroppedImg(free.background_image)}
                    alt={free.name}
                  />

                  <div className="free-content">
                    <h3>{free.name}</h3>
                    <div className="free-content-inner">
                      <div className="platforms">
                        {free.platforms.map((platform) => (
                          <div
                            className="platform"
                            key={platform.platform.name}
                          >
                            <img
                              src={`/assets/platforms/${platform.platform.slug.toLowerCase()}.png`}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                      <div className="free-play">
                        <Button type="buy" text="Play" />
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
