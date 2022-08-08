import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./assets/styleForGallery.css";

import sample1 from "./assets/img/sample1.png";
import sample2 from "./assets/img/sample2.png";
import sample3 from "./assets/img/sample3.png";
import sample4 from "./assets/img/sample4.png";
import sample5 from "./assets/img/sample5.png";

/* @yeokyeong46 */
function Gallery() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="Gallery">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={sample1} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={sample2} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={sample3} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={sample4} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={sample5} alt=""/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gallery;
