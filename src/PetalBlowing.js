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
  //let animation;
  //const swayAnimations = ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8']
  //const blowAnimations = ['blow-soft-left', 'blow-medium-left', 'blow-hard-left'];//, 'blow-soft-right', 'blow-medium-right', 'blow-hard-right']


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

    //const blowAnimation = blowAnimations[Math.floor(Math.random() * blowAnimations.length)];
    //const swayAnimation = swayAnimations[Math.floor(Math.random() * swayAnimations.length)];
    //const fallTime = (5 + Math.random() * 5) * 3;
    //const opacity = 0.7 + Math.random() * 0.3;
    //animation = 'fall ' + fallTime + 's linear 0s 1, ' +
    // blowAnimation + ' ' + (((fallTime > 30 ? fallTime : 30) - 20) + getRandomInt(0, 20)) + 's linear 0s infinite, '
    // + swayAnimation + ' ' + getRandomInt(2, 4) + 's linear 0s infinite';
    let style = {
      width,
      height,
      //opacity,
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
/*
const TOTAL_PETAL_CNT = 100
const petalArr = []

function test() {
  const root = document.getElementById("root");
  const canvas = document.createElement('canvas');
  canvas.id = "petalCanvas";
  canvas.left = 0;
  canvas.top = 0;
  canvas.width = root.scrollWidth;
  canvas.height = root.scrollHeight;

  const ctx = canvas.getContext("2d");
  return [canvas, ctx]
}

function Drawpetal() {
  const [canvas, ctx] = test();
  const petalImg = new Image()
  petalImg.src = `./assets/petal.png`
  petalImg.onload = () => {
    for(let i = 0; i < TOTAL_PETAL_CNT; i++)
    {
        petalArr.push(new Petal(canvas, ctx, petalImg))
    }
    render()
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    petalArr.forEach(petal => {
      petal.animate()
    })

    window.requestAnimationFrame(render)
  }

  window.addEventListener('resize', () => {
    canvas.width = document.documentElement.clientWidth
    canvas.height = document.documentElement.clientHeight
  })
  return canvas
}


class Petal {
  constructor(canvas, ctx, img) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.petalImg = img;
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height * 2 - canvas.height
    this.w = 20 + Math.random() * 15
    this.h = 10 + Math.random() * 10
    this.opacity = this.w / (30 + Math.random() * 30)
    this.xInitSpeed = 1 + Math.random()
    this.yInitSpeed = 1 + Math.random() * 0.5
    this.xSpeed = this.xInitSpeed
    this.ySpeed = this.yInitSpeed
    this.xAcceleration = 0
    this.yAcceleration = 0
    this.flip = Math.random()
    this.flipSpeed = Math.random() * 0.03
  }

  draw() {
    if (this.y > this.canvas.height || this.x > this.canvas.width) {
      this.x = -this.src.width
      this.y = Math.random() * this.canvas.height * 2 - this.canvas.height
      this.xInitSpeed = 1 + Math.random()
      this.yInitSpeed = 1 + Math.random() * 0.5
      this.xSpeed = this.xInitSpeed
      this.ySpeed = this.yInitSpeed
      this.xAcceleration = 0
      this.yAcceleration = 0
      this.flip = Math.random()
    }
    
    if(this.xAcceleration > -3 && this.xAcceleration < 0 && Math.random() > 0.7 || this.xAcceleration > -3 && Math.random() < 0.1) {
      this.xAcceleration = this.xAcceleration - Math.random() * 0.2
    }
    if(this.yAcceleration > -1 && this.yAcceleration < 0 && Math.random() > 0.5 || this.yAcceleration > -1 && Math.random() < 0.1) {
      this.yAcceleration = this.yAcceleration - Math.random() * 0.1
    }
    if(this.xAcceleration < 1 && this.xAcceleration > 0 && Math.random() < 0.5 || this.xAcceleration < 1 && Math.random() > 0.3) {
      this.xAcceleration = this.xAcceleration + Math.random() * 0.2
    }
    if(this.yAcceleration < 0.5 && this.yAcceleration > 0 && Math.random() < 0.5 | this.yAcceleration < 0.5 && Math.random() > 0.3) {
      this.yAcceleration = this.yAcceleration + Math.random() * 0.1
    }

    this.xSpeed = this.xInitSpeed + this.xAcceleration
    this.ySpeed = this.yInitSpeed + this.yAcceleration

    this.ctx.globalAlpha = this.opacity
    this.ctx.drawImage(
      this.petalImg,
      this.x,
      this.y,
      this.w * (0.66 + (Math.abs(Math.cos(this.flip)) / 3)),
      this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 2)),
    )
  }

  animate() {
    this.x += this.xSpeed
    this.y += this.ySpeed
    this.draw()
    this.flip += this.flipSpeed
  }
}

export default function PetalBlowing()
{
  const canvas = Drawpetal()
  const app = ReactDOM.createRoot(document.getElementsByClassName('App'));
  ReactDOM.
  );
}
*/