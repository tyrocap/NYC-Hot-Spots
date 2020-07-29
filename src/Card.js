import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  constructor(props) {
    super (props);

    this.state = {
      showMenu: false,
      buttonText: this.props.buttonText,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.changeButtonText = this.changeButtonText.bind(this);
    this.wrapperFuntion = this.wrapperFuntion.bind(this);
  }

  wrapperFuntion(event) {
    this.toggleMenu(event);
    this.changeButtonText(event);
  }

  changeButtonText(event) {
    this.setState({
      buttonText: event.target.value,
    })
  }

  toggleMenu(event) {
    if (this.state.showMenu === false) {
      this.setState({
      showMenu: true,
      })
    } else {
      this.setState({
      showMenu: false,
      })
    }

  }

  render() {
    const text = this.state.buttonText;
    const buttons = [];
    for (let i=0; i<this.props.itemCount; i++) {
      let btnText = this.props.itemsTexts[i];
      buttons.push(<button className="btn backg-tr normal-font" value={btnText} onClick={this.wrapperFuntion}>{btnText}</button>)
    }
    return (
      <div className="card">
        <button className="btn-flex backg-tr color-white normal-font" onClick={this.toggleMenu}>
          {text}<span>&#9660;</span>
        </button>
        {
          this.state.showMenu
          ? (
              <div className="dropdown-menu">
                {buttons}
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Card;