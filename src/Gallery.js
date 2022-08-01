import React, { useEffect } from 'react';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
import './assets/styleForGallery.css';
import sample1 from "./assets/img/sample1.png";
import sample2 from "./assets/img/sample2.png";
import sample3 from "./assets/img/sample3.png";
import sample4 from "./assets/img/sample4.png";
import sample5 from "./assets/img/sample5.png";

/* @yeokyeong46 */
function Content(props){
  return (
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src={sample1} alt=""/></div>
          <div className="swiper-slide"><img src={sample2} alt=""/></div>
          <div className="swiper-slide"><img src={sample3} alt=""/></div>
          <div className="swiper-slide"><img src={sample4} alt=""/></div>
          <div className="swiper-slide"><img src={sample5} alt=""/></div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
  );
}
  
function InitSwiper(){
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 30,

      // If we need pagination
      pagination: {
          el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
          el: '.swiper-scrollbar',
      },
  });
}

function Gallery() {

  useEffect(() => {
    InitSwiper();
  });

  return (
    <div className="Gallery">
      <Content></Content>
    </div>
  );
}

export default Gallery;
