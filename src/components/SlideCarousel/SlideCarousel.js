import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  EffectCube,
} from "swiper/modules";
import "swiper/css/bundle";

import { HiArrowSmallLeft, HiArrowRight } from "react-icons/hi2";

const SlideCarousel = ({ projectImages, isMobile = false }) => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div
      className="w-fit relative sm:px-20"
      style={{ maxWidth: `${isMobile ? "calc(100w - 10px)" : ""}`, width: `${isMobile ? "calc(100vw - 2rem)" : ""}` }}
    >
      <Swiper
        className="flex w-full px-20 relative justify-center items-center mx-auto"
        slidesPerView={"auto"}
        loop={false}
        centeredSlides={true}
        spaceBetween={5}
        effect={isMobile ? "cube" : null}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.7,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[
          EffectCube,
          Pagination,
          EffectCoverflow,
          Autoplay,
          Navigation,
          Scrollbar,
        ]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        onInit={handleSlideChange}
      >
        {projectImages.map((image) => (
          <SwiperSlide className="mx-auto w-full flex mb-4" key={image.id}>
            <img
              className="h-full mx-auto mb-4 rounded-md"
              style={{ maxHeight: "350px" }}
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className={`z-20 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full`}>
        <button
          className={`bg-secondary-gray rounded-full p-1 transition-all duration-700 ${!isMobile && isBeginning ? "opacity-0 cursor-auto" : "opacity-80 hover:opacity-100"}`}
          onClick={() => !isMobile && isBeginning ? null: swiperRef.current?.slidePrev()}
        >
          <HiArrowSmallLeft
            color="black"
            size={24}
          />
        </button>
      </div>
      
      <div className={`z-20 absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full`}>
        <button
          className={`bg-secondary-gray shadow-2xl border rounded-full p-1 transition-all duration-700 ${!isMobile && isEnd ? "opacity-0 cursor-auto" : "opacity-80 hover:opacity-100 "}`}
          onClick={() => !isMobile && isEnd ? null: swiperRef.current?.slideNext()}
        >
          <HiArrowRight
            color="black"
            size={24}
          />
        </button>
      </div>
      
      {!isMobile && (
        <div className="absolute -bottom-[15px] left-1/2 transform -translate-x-1/2 mb-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {activeIndex + 1} / {projectImages.length}
        </div>
      )}
    </div>
  );
};

SlideCarousel.propTypes = {
  projectImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  isMobile: PropTypes.bool
};

export default SlideCarousel;