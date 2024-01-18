'use client';

/* eslint-disable import/extensions */
import React from 'react';
import { run } from './run.js';
import * as program from './programs/flower-video-to-ascii.js';

// eslint-disable-next-line react/prop-types
class AsciiFlower extends React.Component {
  constructor(props) {
    super(props);
    this.preRef = null;
  }

  componentDidMount() {
    run(program, { element: this.preRef }).then((e) => {
      console.log(e);
    }).catch((e) => {
      console.warn(e.message);
      console.log(e.error);
    });
  }

  render() {
    return (
      <pre
        ref={(ref) => { this.preRef = ref; }}
        style={{
          position: 'absolute',
          zIndex: '1',
          margin: '0',
          padding: '0',
          left: '4vw',
          top: '0',
          height: '100vh',
          width: '100vw',
          fontSize: '1.02vw',
          lineHeight: '1.15',
          fontFamily: "'Simple Console', monospace",
        }}
      />
    );
  }
}

export default AsciiFlower;
