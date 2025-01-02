import React from 'react';
import { useSwiper } from 'swiper/react';
import "../widgets.css"
import { FiArrowLeft, FiArrowRight  } from "react-icons/fi";


export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}><FiArrowLeft size={25}/></button>
      <button onClick={() => swiper.slideNext()}><FiArrowRight size={25} /></button>
    </div>
  );
};