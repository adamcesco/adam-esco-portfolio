'use client';

import React from 'react';
import { AnsiUp } from 'ansi_up';
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import asciiFlower from '/public/ascii-flower.json';
import './AsciiAnimation.css';

class AsciiAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      currentFrameIndex: 0,
      frameData: '',
    };
    this.ansiUp = new AnsiUp();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      // time the calculation of this function
      const start = performance.now();
      const { currentFrameIndex } = this.state;
      const index = currentFrameIndex;

      this.setState({
        currentFrameIndex: index === asciiFlower.length - 1 ? 0 : index + 1,
        frameData: this.ansiUp.ansi_to_html(asciiFlower[index].data),
      });
      const end = performance.now();
      console.log(`Frame ${index} took ${end - start} ms`);
    }, 1000 / 30);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { frameData } = this.state;
    return (
      <div id="flower" dangerouslySetInnerHTML={{ __html: frameData }} />
    );
  }
}

export default AsciiAnimation;
