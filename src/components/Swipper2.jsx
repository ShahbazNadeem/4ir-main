import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './widgets.css';

import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
const Swipper2 = ({ data }) => {
    return (
        <div className="Swipper2">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper">
                <div className="">
                    {
                        data?.map((items, index) => {
                            return <SwiperSlide>
                                <div className="Swipper2-content">
                                    <div className="Swipper2-box">
                                        {items.img && <figure><Image src={items.img} /></figure>}

                                        <div className="Swipper2-title">
                                            {items.title && <span>{items.title}</span>}
                                            {items.subTitle && <span>{items.subTitle}</span>}
                                        </div>
                                    </div>
                                    <div className="Swipper2-description">
                                        {items.description && <p>{items.description}</p>}

                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }

                </div>

            </Swiper>
        </div>
    )
}

export default Swipper2