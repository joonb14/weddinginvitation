import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import styled, {keyframes} from "styled-components"

import './assets/snow.css';
import petalImg from './assets/petal.png'

function Snowflake(props) {
  return(
    <props.Tag
      alt=""
      src={petalImg}
      className='Snowflake'
      id={`item${props.id}`}
      style={props.style}>
    </props.Tag>
  )
}

function Petal(props) {
  const count = props.count;
  let petals = [];

  const browserHeight = document.documentElement.clientHeight;
  const documentWidth = document.documentElement.scrollWidth;
  const documentHeight = document.documentElement.scrollHeight;

  const heightRate = documentHeight / browserHeight * 100;

  for(let i = 0; i < count; i++) {
    let iniTop = Math.random() * heightRate;
    if(iniTop < 70) iniTop /= 2;
    else iniTop = iniTop / 2 + 50;
    const width = (10 + Math.random() * 6);
    const height = (10 + Math.random() * 6);
    const maxRate = (width / documentWidth > height / documentHeight ? width / documentWidth : height / documentHeight) * 100;
    const margin = maxRate * 2;
    const top = -margin + iniTop;
    let left;

    let finalLeft;
    let finalBottom = 100 + iniTop;

    if(Math.random() < 0.5) // 오른쪽방향
    {
      left = Math.random()*90 - margin;
      finalLeft = left;
      const speedOption = Math.random();

      let minusVal;
      if(speedOption < 1/3)
      {
        finalLeft += 150;
        minusVal = (finalLeft - 100 + margin) / 150 * 100;
      }
      else if(speedOption < 2/3)
      {
        finalLeft += 100;
        minusVal = (finalLeft - 100 + margin);
      }
      else
      {
        finalLeft += 50;
        minusVal = (finalLeft - 100 + margin) * 2;
      }

      if(finalLeft > 100 - margin)
      {
        finalBottom -= minusVal // 각도 유지를 하면서 떨어지게 하기 위함
        finalLeft = 100 - margin;
      }
    }
    else  // 왼쪽방향
    {
      left = Math.random()*90 + 10 - margin;
      finalLeft = left;
      const speedOption = Math.random();
      
      let plusVal;
      if(speedOption < 1/3)
      {
        finalLeft -= 150;
        plusVal = finalLeft / 150 * 100;
      }
      else if(speedOption < 2/3)
      {
        finalLeft -= 100;
        plusVal = finalLeft;
      }
      else
      {
        finalLeft -= 50;
        plusVal = finalLeft * 2;
      }

      if(finalLeft < 0)
      {
        finalBottom += plusVal; // 각도 유지를 하면서 떨어지게 하기 위함
        finalLeft = 0;
      }
    }

    const startTheta = Math.random() * 100 - 5;
    const middleTheta = Math.random() * 109 + 28;
    const endTheta = Math.random() * 80 + 3;
    const newPetalAnimation = keyframes`
      0% {
        top: ${top}%;
        left: ${left}%;
        transform: rotate(${startTheta}deg);
        opacity: 0.5;
      }
      1% {
        opacity: 0.9;
      }
      40% {
        transform: rotate(${middleTheta}deg);
      }
      95%{
        opacity: 0.6;
      }
      100% {
        left: ${finalLeft}%;
        top: ${finalBottom}%;
        transform: rotate(${endTheta}deg);
        opacity: 0.1;
      }
    `;

    const animationDelay = `${(Math.random() * 16).toFixed(2)}s`; // 0~16 사이에서 소수점 2번째 자리수까지의 랜덤숫자

    const PetalImg = styled.img`
      animation-name: ${newPetalAnimation};
      animation-duration: ${(finalBottom - iniTop) / 3}s;
      animation-delay: ${animationDelay};
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    `;

    let style = {
      width,
      height,
    }
    petals.push(<Snowflake key={i} id={i} style={style} Tag={PetalImg}/>);
  }
  return petals
}

function DrawPetals() {

  return(
    <Petal count={100}></Petal> // 개수가 너무 많으면 Out of Memory
  );
}

function PetalBlowing() {


  useEffect(() => {
    const element = document.getElementById("Petals");
    const root = createRoot(element);
    root.render(<DrawPetals/>)
  });

  return (
    <div id='Petals' className="Petals"></div> 
  );
}

export default PetalBlowing;