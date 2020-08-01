import React, { Component }  from 'react';
import {Slider, Handles} from 'react-compound-slider'
import Sslider from "./Sslider";

export function Handle({
  handle: {id, value, percent},
  getHandleProps
}) {
  return (
    <div
      style={{
        left: 0,
        position: 'absolute',
        marginLeft: -7.5,
        marginTop: 30,
        zIndex: 99,
        width: 15,
        height: 15,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255, 1)',
        color: '#333',
      }}
      {...getHandleProps(id)}
    >
      {/*<div style={{fontFamily: 'Roboto', fontSize: 15, marginTop: -35}}>*/}
      {/*  {value}*/}
      {/*</div>*/}
    </div>
  )
}

export default Handle;