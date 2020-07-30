import React, {Component} from 'react';
import SRest from './SRest'


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
    const areaName = this.props.areaName;
    const areaScore = this.props.areaScore;
    const restArray = [];
    restArray.push(
      <SRest restName="Maroccan Bay" restScore="59" restType="restaurant"/>,
      <SRest restName="Uzbek Bay" restScore="48" restType="restaurant"/>,
      <SRest restName="Mexican Bay" restScore="75" restType="restaurant"/>,
    )
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
            restArray.map(rest => <div>{rest}</div>)
            ) : null
        }
      </div>
    );
  }

}

export default SArea;