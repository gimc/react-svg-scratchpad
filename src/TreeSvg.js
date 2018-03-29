import React, { Component } from 'react';
import NodeSvg from './NodeSvg';

export default class TreeSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    };
  }

  onClickNode = (index, event) => {
    this.setState({
      selected: index
    });
  };

  render() {
    const { nodes, config } = this.props.data;

    return (
      <g>
        {nodes.map((node, i) => (
          <NodeSvg
            key={i}
            node={node}
            selected={this.state.selected === i}
            onClickNode={this.onClickNode.bind(this, i)}
            config={config}
          />
        ))}
      </g>
    );
  }
}
