import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import Slider from './Sslider'
import SArea from "./SArea";
import MyMapComponent from "./Maps"

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
              <Card buttonText="Chinatown" itemCount="4" itemsTexts={['Chelsea','Downtown','Uptown','Midtown','Harlem']}></Card>
              <p className="normal-font"><pre className="pre-text color-white">on a</pre></p>
              <Card buttonText="Saturday" itemCount="5" itemsTexts={['Saturday','Friday','Thursday','Wednesday','Tuesday','Monday']}></Card>
              <p className="normal-font"><pre className="pre-text color-white">around</pre></p>
              <Card buttonText="5PM" itemCount="8" itemsTexts={['6PM','7PM','8PM','9PM','10PM','11PM','12AM','1AM','2AM']}></Card>
            </div>
          <div className="g-map-header-slider">
            <Slider/>
          </div>
          </div>
          <div className="g-map-sidebar">
            <ul className="g-map-sidebar-content">
              <SArea areaName="Chinatown" key={"0"} areaScore="90"></SArea>
              <hr />
              <SArea areaName="Chelsea" key={"1"} areaScore="70"></SArea>
              <hr />
              <SArea key={"2"} areaName="Town" areaScore="60"></SArea>
              <hr />
              <SArea areaName="Sea" key={"3"} areaScore="50"></SArea>
              <hr />
              <SArea areaName="Chinatown" key={"4"} areaScore="90"></SArea>
              <hr />
              <SArea areaName="Chelsea" key={"5"} areaScore="70"></SArea>
              <hr />
              <SArea areaName="Town" key={"6"} areaScore="60"></SArea>
              <hr />
              <SArea areaName="Sea" key={"7"} areaScore="50"></SArea>
              <hr />
              <SArea areaName="Town" key={"8"} areaScore="60"></SArea>
              <hr />
              <SArea areaName="Sea" key={"9"} areaScore="50"></SArea>
              <hr />
            </ul>
          </div>
          <div className="google-maps">
            <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCO81s5Y-5mT2keHrigJ5XotMZc8otwYG4&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <div className="google-maps-content"></div>
        </div>
      </body>

    </div>
  );
}

export default App;
