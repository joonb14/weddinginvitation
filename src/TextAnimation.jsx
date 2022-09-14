import React, {useEffect} from 'react';

import './assets/style/reset.css';
import './assets/style/textanimation.css';

import { ReactComponent as TextSVG } from './assets/svg/textanimation.svg';

/* @bravoyourlif */
function HeaderContent(props) {

  return (
    <div className="HeaderContent">
      <TextSVG></TextSVG>
    </div>
  );
}

function ClipSVG(props) {
    const bgGroup = document.querySelector('.svg-bg')
    const bgPaths = bgGroup.querySelectorAll('path')
    Animate(bgPaths)

    const mainGroup = document.querySelector('.svg-main')
    const mainPaths = mainGroup.querySelectorAll('path')
    Animate(mainPaths)
}

function Animate(paths) {
  paths.forEach((path, index) => {
    const length = path.getTotalLength()
    path.style.setProperty('--length', length)
    path.style.setProperty('--delay', index * 200 + 'ms')
    path.style.setProperty('--duration', length * 100 + 'ms')
  }) 
}

export default function Header(props) {

    useEffect(() => {
      ClipSVG();
    }) 

    return (
      <div className="Header">
        <HeaderContent></HeaderContent>
      </div>
    );
}
