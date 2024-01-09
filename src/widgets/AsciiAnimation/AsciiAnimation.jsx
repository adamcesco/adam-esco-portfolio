'use client';

import React from 'react';
// import { AnsiUp } from 'ansi_up';
import AsciiCanvas from '../AsciiCalc';
import './AsciiAnimation.css';

class AsciiAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.eventSource = null;
    this.interval = null;
    // this.ansiUp = new AnsiUp();
    // this.ansiUp.use_classes = true;
    // this.state = {
    //   frameIndex: 0,
    // };

    // create a buffer queue
    // this.buffer = [];
  }

  // componentDidMount() {
  //   this.eventSource = new EventSource('http://localhost:5000/stream');

  //   this.eventSource.onmessage = (e) => {
  //     if (e.data === 'end') {
  //       this.eventSource.close();
  //       return;
  //     }
  //     const res = this.ansiUp.ansi_to_html(JSON.parse(e.data));
  //     this.buffer.push(res);
  //     console.log('buffer length: ', this.buffer.length);
  //   };

  //   this.interval = setInterval(() => {
  //     if (this.buffer.length < 750) {
  //       return;
  //     }
  //   }, 1000 / 30);
  // }

  componentWillUnmount() {
    this.eventSource?.close();
    clearInterval(this.interval);
  }

  render() {
    // const { frameIndex } = this.state;
    return (
      // <div id="flower" dangerouslySetInnerHTML={{ __html: this.buffer[frameIndex] }} />
      <AsciiCanvas />
    );
  }
}

export default AsciiAnimation;
