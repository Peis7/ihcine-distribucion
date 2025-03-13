import React from "react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.css";
import { CarouselProps } from "../../interfaces/CarouselProps";
import HeroBannerWithImage from "../Hero/HeroWithImage";


const CarouselHero: React.FC<CarouselProps> = ({ items }) => {


  return (
    <div className="carousel-container md:h-auto shadow-lg">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        rewind={true}
        navigation={false}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${index} swiper-pagination-bullet custom-dot ${className}"></span>`;
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
              <HeroBannerWithImage
                    imageUrl={item.image.url}
                    title={item.title}
                    title1={item.title2 || ""}
                    excerpt={item.subtitle}
                    />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselHero;
