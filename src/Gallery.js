import React, { useEffect, useContext } from 'react';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
import './assets/style.css';

/* @yeokyeong46 */
function Content(props){
  return (
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="assets/img/sample1.png"></img></div>
          <div class="swiper-slide"><img src="assets/img/sample2.png"></img></div>
          <div class="swiper-slide"><img src="assets/img/sample3.png"></img></div>
          <div class="swiper-slide"><img src="assets/img/sample4.png"></img></div>
          <div class="swiper-slide"><img src="assets/img/sample5.png"></img></div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
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
