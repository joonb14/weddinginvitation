import React from 'react';

import SvgImage from './SvgImage';

import './assets/style.css';
import './assets/reset.css';

/* @bravoyourlif */
function Header() {
  return (
    <div className="Header">

    </div>
  );
}

/* @yeokyeong46 */
function Gallery() {
  return (
    <div className="Gallery">

    </div>
  );
}

/* @ */
function Map() {
  return (
    <div className="Map">

    </div>
  );
}

/* @ */
function DashBoard() {
  return (
    <div className="DashBoard">

    </div>
  );
}


function App() {

  return (
    <div className="App">
      <Header></Header>
      <SvgImage></SvgImage>
      <Gallery></Gallery>
      <Map></Map>
      <DashBoard></DashBoard>
    </div>
  );
}

export default App;
