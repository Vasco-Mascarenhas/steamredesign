import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useGenres } from "../../../hooks/useGenres";
import { getCroppedImg } from "../../../helpers/getCroppedImg";
import "./genres.css";
const Genres = () => {
  const { data, isLoading, error } = useGenres();
  const gradientColors = [
    "linear-gradient(180deg, #0000008a 67%, rgba(23, 17, 36, 0.56) 100%)",
    "linear-gradient(180deg, #0000008a 67%, rgba(255, 0, 0, 0.5) 100%)",
    "linear-gradient(180deg, #0000008a 67%, rgba(0, 128, 0, 0.5) 100%)",
    "linear-gradient(180deg, #0000008a 67%, rgba(0, 0, 255, 0.5) 100%)",
    "linear-gradient(180deg, #0000008a 67%, rgba(255, 255, 0, 0.5) 100%)",
    "linear-gradient(180deg, #0000008a 67%, rgba(255, 165, 0, 0.5) 100%)",
    "linear-gradient(180deg, #0000008a 67%, rgba(128, 0, 128, 0.5) 100%)",
  ];

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={15}
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 7000,
        disableOnInteraction: true,
      }}
      loop
      className="mySwiper mySwiper-trending"
    >
      {isLoading ? (
        <p>Loading</p>
      ) : (
        data.results.map((genre, index) => (
          <SwiperSlide key={genre.id}>
            <div
              className="genre-inner"
              style={{
                backgroundImage: `url(${getCroppedImg(
                  genre.image_background
                )})`,
              }}
            >
              <div
                className="genre-hero"
                style={{
                  background: gradientColors[index % gradientColors.length],
                }}
              >
                <h3>{genre.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default Genres;
