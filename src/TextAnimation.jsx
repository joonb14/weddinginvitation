import React, {useEffect} from 'react';

/*import './assets/textanimation.css'*/
import './assets/style.css';
import './assets/reset.css';

import { ReactComponent as TextSVG } from './assets/textanimation.svg';

/* @bravoyourlif */
function SVGcontent(props) {

  return <div className="SVGcontent">
    <TextSVG></TextSVG>
    <ClipSVG></ClipSVG>
  </div>
}

function ClipSVG(props) {
    const bgGroup = document.querySelector('.svg-bg')
    const bgPaths = bgGroup.querySelectorAll('path')
    Animate(bgPaths)

    const mainGroup = document.querySelector('.svg-main')
    const mainPaths = mainGroup.querySelectorAll('path')
    Animate(mainPaths)

    return <div className="ClipSVG">
      <ClipSVG></ClipSVG>
    </div>
}

function Animate(paths) {
  paths.forEach((path, index) => {
    const length = path.getTotalLength()
    path.style.setProperty('--length', length)
    path.style.setProperty('--delay', index * 10 + 'ms')
    path.style.setProperty('--duration', length * 1.5 + 'ms')
  }) 
}

export default function Header(props) {

    useEffect(() => {
      ClipSVG();
    })

    return (
      <div className="Header">
        <SVGcontent></SVGcontent>
      </div>
    );
}
