'use client';

import React from 'react';
import { AnsiUp } from 'ansi_up';
import './AsciiAnimation.css';

class AsciiAnimation extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line max-len
    this.containerRef = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    this.eventSource = null;
    this.interval = null;
    this.ansiUp = new AnsiUp();
    this.ansiUp.use_classes = true;
    this.state = {
      lineIndex: 0,
    };

    // create a buffer queue
    this.buffer = [];
  }

  componentDidMount() {
    this.eventSource = new EventSource('http://localhost:5000/stream');

    this.eventSource.onmessage = (e) => {
      this.buffer.push(this.ansiUp.ansi_to_html(e.data));
    };

    this.interval = setInterval(() => {
      if (this.buffer.length > 0) {
        const { lineIndex } = this.state;
        const line = this.buffer.shift();
        // this.containerRef[lineIndex].innerHTML = line;
        this.containerRef[lineIndex].dangerouslySetInnerHTML = { __html: line };
        this.setState({ lineIndex: (lineIndex + 1) % this.containerRef.length });
      }
    }, 1);
  }

  componentWillUnmount() {
    this.eventSource?.close();
    clearInterval(this.interval);
  }

  render() {
    return (
      <div id="container">
        <div className="flower" ref={(ref) => { this.containerRef[0] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[1] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[2] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[3] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[4] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[5] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[6] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[7] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[8] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[9] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[10] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[11] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[12] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[13] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[14] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[15] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[16] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[17] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[18] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[19] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[20] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[21] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[22] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[23] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[24] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[25] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[26] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[27] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[28] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[29] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[30] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[31] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[32] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[33] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[34] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[35] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[36] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[37] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[38] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[39] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[40] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[41] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[42] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[43] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[44] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[45] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[46] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[47] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[48] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[49] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[50] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[51] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[52] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[53] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[54] = ref; }} />
        <div className="flower" ref={(ref) => { this.containerRef[55] = ref; }} />
      </div>
    );
  }
}

export default AsciiAnimation;
