import React, { useEffect } from 'react';

import { ReactComponent as Content1 } from './assets/content1.svg';
import { ReactComponent as Content2 } from './assets/content2.svg';
import { ReactComponent as Content3 } from './assets/content3.svg';
import { ReactComponent as Content4 } from './assets/content4.svg';

import './assets/style.css';
import './assets/reset.css';

function Header() {
  return (
    <div className="Header"></div>
  );
}

function Footer() {
  return (
    <div className="Footer"></div>
  );
}

function SvgContent(props){
  return (
    <div className="SvgContent">
      <div className="content1">
        <Content1></Content1>
      </div>
      <div className="content2">
        <Content2></Content2>
      </div>
      <div className="content3">
        <Content3></Content3>
      </div>
      <div className="content4">
        <Content4></Content4>
      </div>
    </div>
  );
}

function InitScrollHandler(){
  const content1 = document.querySelector('.content2')
  const content2 = document.querySelector('.content3')
  const content3 = document.querySelector('.content4')
  const path1 = document.querySelector('.path2')
  const path2 = document.querySelector('.path3')
  const path3 = document.querySelector('.path4')
  const path1Length = path1.getTotalLength()
  const path2Length = path2.getTotalLength()
  const path3Length = path3.getTotalLength()
  path1.style.strokeDasharray  = path1Length + ' ' + path1Length
  path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content1, path1Length)
  
  path2.style.strokeDasharray  = path2Length + ' ' + path2Length
  path2.style.strokeDashoffset = path2Length
  
  path3.style.strokeDasharray  = path3Length + ' ' + path3Length
  path3.style.strokeDashoffset = path3Length

  function calcDashoffset(scrollY, element, length) {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight
    const value = length - (length * ratio)
    return value < 0 ? 0 : value > length ? length : value
  }

  function scrollHandler() {
    const scrollY = window.scrollY + (window.innerHeight * 0.8)
    path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
    path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, path2Length)
    path3.style.strokeDashoffset = calcDashoffset(scrollY, content3, path3Length)
  }

  window.addEventListener('scroll', scrollHandler)
}

function App() {

  useEffect(() => {
    InitScrollHandler();
  });

  return (
    <div className="App">
      <Header></Header>
      <SvgContent></SvgContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
