import React from 'react';

import SvgContent from './SvgContent';
import Gallery from './Gallery';
import PetalBlowing from './PetalBlowing';
import Header from './TextAnimation';

import './assets/reset.css';
import './assets/style.css';

/* @ */
function Map() {
  return (
    <div className="Map">

    </div>
  );
}

/* @ */
function Calendar() {
  return (
    <div className="Calendar">

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
      <SvgContent></SvgContent>
      <Gallery></Gallery>
      <Calendar></Calendar>
      <Map></Map>
      <DashBoard></DashBoard>
      <PetalBlowing></PetalBlowing>
    </div>
  );
}

export default App;
