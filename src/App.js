import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-background">
        </div>
        <div className="header-content">
          <h1>New York City Hot Spots</h1>
          <p>Discover restaurants, clubs and bars that are consistently <br />
          busy and highly rated in New York City's most popular areas</p>
        </div>
      </header>
      <body>
        <div className="g-map">
          <div className="g-map-header">
            <div className="filter-box">
              <Card></Card>
              <p className="normal-font">on a </p>
              <Card></Card>
              <p className="normal-font">around </p>
              <Card></Card>
            </div>
            <div></div>
          </div>
          <div className="google-maps"></div>
          <div className="google-maps-content"></div>
        </div>
      </body>

    </div>
  );
}

export default App;
