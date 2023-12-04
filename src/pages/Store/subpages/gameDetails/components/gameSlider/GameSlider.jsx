import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useGameSS } from "../../../../../../hooks/useGameSS";
import "swiper/css";
import "swiper/css/pagination";
import "./gameslider.css";
import { getCroppedImg } from "../../../../../../helpers/getCroppedImg";
const GameSlider = ({ gameId }) => {
  const { data, isLoading, error } = useGameSS({ selectedGame: gameId });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedImage(data[0]?.image);
    }
  }, [data]);

  const dupData = data?.length < 4 ? data.concat(data) : data;

  if (isLoading) return <p>loading</p>;

  return (
    <div className="game-slider">
      <div className="game-image">
        {selectedImage && <img src={selectedImage} alt="game image" />}
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop
      >
        {dupData.map((game, index) => (
          <SwiperSlide
            onClick={() => setSelectedImage(game.image)}
            key={game.id + index}
          >
            <img src={getCroppedImg(game.image)} alt="game image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameSlider;
