import React, { Component }  from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'

function Tick({ tick, count }) {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          marginTop: 35,
          marginLeft: -0.5,
          width: 3,
          height: 5,
          backgroundColor: 'white',
          left: `${tick.percent}%`,
          borderRadius: 5,
        }}
      />
      <div
        style={{
          // position: 'absolute',
          marginRight: 20,
          // marginLeft: 20,
          marginTop: 50,
          fontSize: 15,
          textAlign: 'center',
          marginLeft: `${-(90 / count) * 2}%`,
          width: `${90 / count}%`,
          color: "white",
          // left: `${tick.percent}%`,
          left: 10,
        }}
      >
        {tick.value}
      </div>
    </div>
  )
}

export default Tick;
