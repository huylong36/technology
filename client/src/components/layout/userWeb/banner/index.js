import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.scss";
import banner1 from '../../../../assets/banner/banner1.jpeg';
SwiperCore.use([Autoplay, Pagination, Navigation])
const Banner = () => {
    return (
        <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={true}
        pagination={{
            clickable: true,
            dynamicBullets:true
        }}
        navigation={true}
        className="mySwiper"
        loop={true}
        
    >
        <SwiperSlide><img src={banner1} alt=""/></SwiperSlide>
    </Swiper>
    )
}

export default Banner