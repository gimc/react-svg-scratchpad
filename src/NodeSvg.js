import React, { Component } from 'react';

export default class NodeSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textFillColor: 'black'
    };
  }

  onClickNode = event => {
    this.props.onClickNode(event);
  };

  render() {
    const { familyId, x, y } = this.props.node;
    const { width, height } = this.props.config;
    const dimensions = {
      x: x * 10 + 100,
      y: y * 5 + 100,
      width: width * 10,
      height: height * 4
    };

    const textColor = this.props.selected ? 'red' : 'black';

    return (
      <g stroke="black">
        <rect fill="white" {...dimensions} />
        <text
          fill={textColor}
          stroke={textColor}
          fontSize="20"
          x={dimensions.x + 20}
          y={dimensions.y + 20}
        >
          {familyId}
        </text>
        <rect fillOpacity="0" {...dimensions} onClick={this.onClickNode} />
      </g>
    );
  }
}
