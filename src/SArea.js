import React, {Component} from 'react';

class SArea extends Component {
  constructor(props) {
    super (props);

    this.state = {
      showContent: false,
    }

    this.toggleContent = this.toggleContent.bind(this);
  }

    toggleContent(event) {
      if (this.state.showContent === false) {
        this.setState({
        showContent: true,
        })
      } else {
        this.setState({
        showContent: false,
        })
      }

  }

  render() {
    let areaName = this.props.areaName;
    let areaScore = this.props.areaScore;
    return (
      <div className="area-container">
        <div className="area-container-header color-white" onClick={this.toggleContent}>
          <p>{areaName}</p>
          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6 9 12 15 18 9"
                    fill="none" stroke="white" />
          </svg>
          <p>{areaScore}%</p>
        </div>

        {
          this.state.showContent
          ? (
              <div className="area-container-content color-white">
                <div className="area-container-content-uplayer normal-font">
                  <p className="accu-numbers">1.</p>
                  <p className="accu-name">restName</p>
                  <p className="accu-score">60%</p>
                </div>
                <div className="area-container-content-downlayer">
                  <p className="accd-paragraph">restType</p>
                </div>
              </div>
            ) : null
        }
      </div>
    );
  }

}

export default SArea;