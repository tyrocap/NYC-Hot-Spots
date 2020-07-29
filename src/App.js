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
              <Card buttonText="Chinatown" itemCount="5" itemsTexts={['Chinatown','Chelsea','Downtown','Uptown','Midtown','Harlem']}></Card>
              <p className="normal-font"><pre className="pre-text color-white">on a</pre></p>
              <Card buttonText="Saturday" itemCount="5" itemsTexts={['Saturday','Friday','Thursday','Wednesday','Tuesday','Monday']}></Card>
              <p className="normal-font"><pre className="pre-text color-white">around</pre></p>
              <Card buttonText="12PM" itemCount="8" itemsTexts={['6PM','7PM','8PM','9PM','10PM','11PM','12AM','1AM','2AM']}></Card>
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
