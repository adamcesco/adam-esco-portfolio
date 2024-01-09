'use client';

import React from 'react';
import AsciiFlower from '../AsciiCalc';
import './AsciiAnimation.css';

class AsciiAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.eventSource = null;
    this.interval = null;
    this.state = {
      frameIndex: 0,
    };

    // create a buffer queue
    this.buffer = [];
  }

  componentDidMount() {
    this.eventSource = new EventSource('http://localhost:5000/stream');

    this.eventSource.onmessage = (e) => {
      if (e.data === 'end') {
        this.eventSource.close();
        return;
      }
      this.buffer.push(JSON.parse(e.data));
      console.log('buffer length: ', this.buffer.length);
    };
  }

  componentWillUnmount() {
    this.eventSource?.close();
    clearInterval(this.interval);
  }

  render() {
    return (
      <AsciiFlower />
    );
  }
}

export default AsciiAnimation;
