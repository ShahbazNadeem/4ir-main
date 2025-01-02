import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../widgets.css";
import { SwiperNavButtons } from './SwipperNavButton';
import Image from 'next/image';
import { FiArrowRight } from "react-icons/fi";



const Swipper1 = ({ data }) => {
  return (
    <div className="Swipper1">
      <Swiper
        rewind={true}
        pagination={{
          type: 'fraction',
        }}
        modules={[Navigation, Pagination, A11y]}
        className="mySwiper"
      >
        {
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="Swipper1-main-slide">
                <div className="Swipper1-slider-img">
                  <figure>
                    <Image src={item.img} alt={item.alt} />
                  </figure>
                </div>
                <div className="Swipper1-slider-content">
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div><button>Read More <FiArrowRight /></button></div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default Swipper1;
