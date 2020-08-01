import React, { Component }  from 'react';
import { Slider, Handles, Tracks }  from 'react-compound-slider'
import Handle from "./Handler";

function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: 'absolute',
        height: 5,
        zIndex: 5,
        marginLeft: 0,
        marginTop: 35,
        backgroundColor: 'rgba(255,255,255, 1)',
        borderRadius: 5,
        cursor: 'pointer',
        // left: `${source.percent}%`,
        // left: 25,
        width: `${target.percent - source.percent}%`,
        maxWidth: '480px',
      }}
      {...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */}
    />
  )
}

export default Track;
