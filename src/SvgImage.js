import React, { useEffect, useContext } from 'react';

import { Context } from './Context';

import { ReactComponent as Content1 } from './assets/wedding.svg';
import { ReactComponent as Content2 } from './assets/content2.svg';
import { ReactComponent as Content3 } from './assets/content3.svg';
import { ReactComponent as Content4 } from './assets/content4.svg';

import './assets/style.css';
import './assets/reset.css';


/* @joonb14 */
function Content(props){

  /* TODO
  const pathObjects = props.pathObjects
  for(const property in pathObjects){

  }
  */

  return (
    <div className="Content">
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

function SvgImage() {

  const context = useContext(Context);

  useEffect(() => {
    InitScrollHandler(context);
  });

  return (
    <div className="SvgImage">
      <Content></Content>
    </div>
  );
}

export default SvgImage;
