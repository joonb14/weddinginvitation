import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "./assets/style/grid.css"

const ReactGridLayout = WidthProvider(RGL);

export default class GridGallery extends React.Component {
  render() {
    return (
      <ReactGridLayout 
        className="layout" 
        cols={2} 
        rowHeight={300} // default = 150
        // width={1200} // WidthProvider 때문에 없어도 괜찮음
        >
        <div className="grids a" key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}/>
        <div className="grids b" key="b" data-grid={{ x: 1, y: 0, w: 1, h: 1, static: true}}/>
        <div className="grids c" key="c" data-grid={{ x: 1, y: 1, w: 1, h: 1, static: true}}/>
        <div className="grids d" key="d" data-grid={{ x: 0, y: 5, w: 1, h: 1, static: true}}/>
        <div className="grids e" key="e" data-grid={{ x: 1, y: 5, w: 1, h: 1, static: true}}/>
        <div className="grids f" key="f" data-grid={{ x: 0, y: 2, w: 2, h: 3, static: true}}/>
      </ReactGridLayout>
    );
  }
}