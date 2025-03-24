import React from "react";
import { Navigation, Pagination, Autoplay,  Scrollbar, A11y, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselProps } from "../../interfaces/CarouselProps";
import { isMobile } from "../../utils/device";


const CarouselMovies: React.FC<CarouselProps> = ({ items }) => {


  return (
    <div className="carousel-container carousel-movies  bg-darkgray shadow-lg p-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={ isMobile() ? 1 : 3}
        navigation={false}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${index} swiper-pagination-bullet custom-dot ${className}"></span>`;
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carousel-item relative">
              <a href={item.url}>
                <img
                  src={`${item.image.url}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMovies;
