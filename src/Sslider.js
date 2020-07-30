import { Slider, Handles, Tracks, Rail, Ticks } from 'react-compound-slider'
import React, { Component } from 'react';
import Handle from './Handler'
import Track from './Track'
import Tick from './Tick'


class Sslider extends Component {
  render() {
    const sliderStyle = {  // Give the slider some width
      position: 'relative',
      width: '100%',
      height: 80,
      // border: '1px solid steelblue',
    }

    const railStyle = {
      position: 'absolute',
      width: '86%',
      height: 5,
      marginTop: 35,
      // marginLeft: 10,
      borderRadius: 5,
      backgroundColor: 'rgba(255,255,255, 0.5)',
      cursor: 'pointer',
      left: 25,
    }
    return (
      <Slider
        rootStyle={sliderStyle}
        domain={[0, 80]}
        step={9}
        mode={0}
        values={[0]}
      >
        <Rail>
          {({ getRailProps }) => (
            <div style={railStyle} {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={true} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks values={['6PM','7PM','8PM','9PM','10PM','11PM','12AM','1AM','2AM']} count={9 /* generate approximately 8
         ticks
         within the
         domain
         */}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
  )}
}

export default Sslider;
