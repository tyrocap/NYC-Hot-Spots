import React, { Component } from 'react';

class SRest extends Component {
  constructor(props) {
    super (props);
  }

  render() {
    const name = this.props.restName;
    const score = this.props.restScore;
    const type = this.props.restType;
    return (
      <div className="area-container-content color-white">
        <div className="area-container-content-uplayer normal-font">
          <p className="accu-numbers">1.</p>
          <p className="accu-name">{name}</p>
          <p className="accu-score">{score}%</p>
        </div>
        <div className="area-container-content-downlayer">
          <p className="accd-paragraph">{type}</p>
        </div>
      </div>
    )
  }
}

export default SRest;