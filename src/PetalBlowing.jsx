import React from 'react';
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

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function DrawPetal(props) {
  const count = props.count;
  let petals = []

  const documentWidth = document.documentElement.scrollWidth;
  const documentHeight = document.documentElement.scrollHeight;

  for(let i = 0; i < count; i++) {
    const width = (15 + Math.random() * 0.4);
    const height = (15 + Math.random() * 0.4);
    const maxRate = (width > height ? width / documentWidth : height / documentHeight) * 100;
    const margin = maxRate * 2;
    const top = -margin;
    let left;

    let finalLeft;
    let finalBottom = 100;

    if(Math.random() < 0.5) // 오른쪽방향
    {
      left = Math.random()*90 - margin;
      finalLeft = left;
      const speedOption = Math.random();
      if(speedOption < 1/3)
      {
        finalLeft += 150;
        if(finalLeft > 100 - margin)
        {
          finalBottom -= (finalLeft - 100 + margin) / 150 * 100;
          finalLeft = 100 - margin;
        }
      }
      else if(speedOption < 2/3)
      {
        finalLeft += 100;
        if(finalLeft > 100 - margin)
        {
          finalBottom -= (finalLeft - 100 + margin);
          finalLeft = 100 - margin;
        }
      }
      else
      {
        finalLeft += 50;
        if(finalLeft > 100 - margin)
        {
          finalBottom -= (finalLeft - 100 + margin) * 2;
          finalLeft = 100 - margin;
        }
      }
    }
    else  // 왼쪽방향
    {
      left = Math.random()*90 + 10 - margin;
      finalLeft = left;
      const speedOption = Math.random();
      if(speedOption < 1/3)
      {
        finalLeft -= 150;
        if(finalLeft < 0)
        {
          finalBottom += finalLeft / 150 * 100;
          finalLeft = 0;
        }
      }
      else if(speedOption < 2/3)
      {
        finalLeft -= 100;
        if(finalLeft < 0)
        {
          finalBottom += finalLeft;
          finalLeft = 0;
        }
      }
      else
      {
        finalLeft -= 50;
        if(finalLeft < 0)
        {
          finalBottom += finalLeft * 2;
          finalLeft = 0;
        }
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
        opacity: 0;
      }
      3% {
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

    const animationDelay = `${(Math.random() * 100).toFixed(2)}s`; // 0~16 사이에서 소수점 2번째 자리수까지의 랜덤숫자

    const PetalImg = styled.img`
      animation-name: ${newPetalAnimation};
      animation-duration: ${finalBottom / 3}s;
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

export default function PetalBlowing() {
  return (
    <DrawPetal count={300}></DrawPetal>
  )
}