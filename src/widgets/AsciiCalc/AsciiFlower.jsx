'use client';

/* eslint-disable no-console */
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
          height: '100%',
          width: '100%',
          fontSize: '1.02rem',
          lineHeight: '1.17rem',
          fontFamily: "'Simple Console', monospace",
        }}
      />
    );
  }
}

export default AsciiFlower;
