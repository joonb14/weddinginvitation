import React from 'react';

import SvgImage from './SvgImage';
import Gallery from './Gallery';
import PetalBlowing from './PetalBlowing'

import './assets/style.css';
import './assets/reset.css';

/* @bravoyourlif */
function Header() {
  return (
    <div className="Header">
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
      <PetalBlowing></PetalBlowing>
      <SvgImage></SvgImage>
      <Gallery></Gallery>
      <Map></Map>
      <DashBoard></DashBoard>
    </div>
  );
}

export default App;
