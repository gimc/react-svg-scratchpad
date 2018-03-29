import React, { Component } from 'react';
import './App.css';
import TreeSvg from './TreeSvg';
import treeData from './treeData.json';

import { ReactSVGPanZoom } from 'react-svg-pan-zoom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactSVGPanZoom width={1000} height={1000}>
          <svg width={500} height={500} xmlns="http://www.w3.org/2000/svg">
            <TreeSvg data={treeData} />
          </svg>
        </ReactSVGPanZoom>
      </div>
    );
  }
}

export default App;
