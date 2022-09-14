import React from 'react';

import SvgContent from './SvgContent';
import GridGallery from './GridGallery';
// import Gallery from './Gallery';
import PetalBlowing from './PetalBlowing';
import Header from './TextAnimation';
import Calendar from './Calendar'

import './assets/style/reset.css';

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
      <SvgContent></SvgContent>
      <GridGallery></GridGallery>
      <Calendar></Calendar>
      <Map></Map>
      <DashBoard></DashBoard>
      <PetalBlowing></PetalBlowing>
    </div>
  );
}

export default App;
