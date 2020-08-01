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
    }

    const railStyle = {
      position: 'absolute',
      width: '480px',
      height: 5,
      marginTop: 35,
      marginLeft: -25,
      borderRadius: 5,
      backgroundColor: 'rgba(255,255,255, 0.5)',
      cursor: 'pointer',
      left: 25,
    }
    return (
      <div className="slider-container">
        <Slider
          rootStyle={sliderStyle}
          domain={[0, 100]}
          step={10}
          mode={2}
          values={[10]}
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
            <Ticks values={['6PM','7PM','8PM','9PM','10PM','11PM','12AM','1AM','2AM', '3AM']} count={10 /* generate approximately 8
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
      </div>

  )}
}

export default Sslider;
