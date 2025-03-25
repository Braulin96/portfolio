import React, { useRef } from "react";
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
  return (
    <div
      className="w-fit relative sm:px-20"
      style={{ maxWidth: "calc(100w - 10px)", width: "calc(100vw - 2rem)" }}
    >
      <Swiper
        className="flex w-full px-20 relative justify-center items-center mx-auto"
        slidesPerView={"auto"}
        loop={true}
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
      <div className="z-20 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full">
        <button
          className="bg-[#68736C] shadow-lg border rounded-full p-1 hover:bg-opacity-70"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <HiArrowSmallLeft
            color="White"
            className="opacity-70 hover:opacity-100"
            size={30}
          />
        </button>
      </div>
      <div className="z-20 absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full">
        <button
          className="bg-[#68736C] shadow-lg border rounded-full p-1 hover:bg-opacity-70"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <HiArrowRight
            color="White"
            className="opacity-70 hover:opacity-100"
            size={30}
          />
        </button>
      </div>
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