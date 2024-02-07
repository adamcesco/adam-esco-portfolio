'use client';

/* eslint-disable import/extensions */
import React from 'react';
import { run } from './run.js';
import * as program from './programs/flower-video-to-ascii.js';

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
          zIndex: 'inherit',
          position: 'relative',
          margin: '0',
          padding: '0',
          left: '0',
          top: '0',
          height: '100%',
          width: '100%',
          fontSize: '1.02',
          lineHeight: '1.17',
          fontFamily: "'Simple Console', monospace",
        }}
      />
    );
  }
}

export default AsciiFlower;
