import React, { useEffect, useContext } from 'react';

import { Context } from './Context';

import { ReactComponent as Svg1 } from './assets/svg/wedding.svg';
import { ReactComponent as Svg2 } from './assets/svg/content2.svg';

import './assets/style/reset.css';
import './assets/style/content.css';


/* @joonb14 */
function SvgContents(props){

  /* TODO
  const pathObjects = props.pathObjects
  for(const property in pathObjects){

  }
  */

  return (
    <div className="SvgContents">
      <div className="svg1">
        <Svg1></Svg1>
      </div>
      <div className="svg2">
        <Svg2></Svg2>
      </div>
    </div>
  );
}
  
function InitScrollHandler(props){
  
  const paths = []
  const pathObjects = props.pathObjects
  for(const property in pathObjects){
    const target = pathObjects[property].target
    const pathName = pathObjects[property].pathName
    const content = document.querySelector('.'+target)
    const path = document.querySelector('.'+pathName)
    const pathLength = path.getTotalLength()

    path.style.strokeDasharray  = pathLength + ' ' + pathLength
    path.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content, pathLength)

    paths.push([path, content, pathLength])
  }

  function calcDashoffset(scrollY, element, length) {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight
    const value = length - (length * ratio)
    return value < 0 ? 0 : value > length ? length : value
  }

  function scrollHandler() {
    const scrollY = window.scrollY + (window.innerHeight * 0.8)
    paths.forEach(element => {
      element[0].style.strokeDashoffset = calcDashoffset(scrollY, element[1], element[2])
    })
  }

  window.addEventListener('scroll', scrollHandler)
}

function SvgContent() {

  const context = useContext(Context);

  useEffect(() => {
    InitScrollHandler(context);
  });

  return (
    <div className="SvgImage">
      <SvgContents></SvgContents>
    </div>
  );
}

export default SvgContent;
