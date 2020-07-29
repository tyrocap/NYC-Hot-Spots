import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  constructor() {
    super ();

    this.state = {
      showMenu: false,
      buttonText: 'Chinatown',
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
    return (
      <div className="card">
        <button className="btn-flex backg-tr color-white normal-font" onClick={this.toggleMenu}>
          {text}<span>&#9660;</span>
        </button>
        {
          this.state.showMenu
          ? (
              <div className="dropdown-menu">
                <button className="btn backg-tr normal-font" value="Chinatown" onClick={this.wrapperFuntion}>Chinatown</button>
                <button className="btn backg-tr normal-font" value="Chelsea" onClick={this.wrapperFuntion}>Chelsea</button>
                <button className="btn backg-tr normal-font" value="Downtown" onClick={this.wrapperFuntion}>Downtown</button>
                <button className="btn backg-tr normal-font" value="Uptown" onClick={this.wrapperFuntion}>Uptown</button>
                <button className="btn backg-tr normal-font" value="Midtown" onClick={this.wrapperFuntion}>Midtown</button>
                <button className="btn backg-tr normal-font" value="Harlem" onClick={this.wrapperFuntion}>Harlem</button>
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