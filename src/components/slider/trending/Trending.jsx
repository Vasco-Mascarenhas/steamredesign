import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTrending } from "../../../hooks/useTrending";
import "swiper/css";
import "swiper/css/pagination";
import "./trending.css";
import Button from "../../buttons/Button";
import { getCroppedImg } from "../../../helpers/getCroppedImg";
import { Link } from "react-router-dom";
import { useGameContext } from "../../../contexts/selectedGame";
const Featured = () => {
  const { data, isLoading, error } = useTrending();
  const { setSelectedGame } = useGameContext();
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4500,
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
        data.results.map((trending) => (
          <SwiperSlide key={trending.id}>
            <Link
              to="/gameDetails"
              onClick={() => setSelectedGame(trending.id)}
            >
              <div className="trending-inner">
                <div className="trending-hero">
                  <img
                    src={getCroppedImg(trending.background_image)}
                    alt={trending.name}
                  />
                </div>
                <div className="trending-title">
                  <h3>{trending.name}</h3>
                </div>
                <div className="trending-content">
                  <div className="platforms">
                    {trending.platforms.slice(0, 3).map((platform) => (
                      <div className="platform" key={platform.platform.name}>
                        <img
                          src={`/assets/platforms/${platform.platform.slug.toLowerCase()}.png`}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                  <div className="trending-price">
                    <span>69.42$</span>
                    <Button type={"buy"} text={"Buy Now"} />
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
