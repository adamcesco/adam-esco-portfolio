'use client';

import React from 'react';
import { AnsiUp } from 'ansi-up';
import asciiFlower from '../../../public/ascii-flower.json';
import './AsciiAnimation.css';

class AsciiAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.containerRef = null;
    this.state = {
      currentFrameIndex: 0,
    };
  }

  componentDidMount() {
    console.log((new AnsiUp()).ansi_to_html(asciiFlower[0].data));

    this.interval = setInterval(() => {
      const { currentFrameIndex } = this.state;
      let index = currentFrameIndex;

      // Move to the next frame
      index += 1;

      // Reset to the first frame if we reach the end
      if (index === asciiFlower.length) {
        index = 0;
      }

      const ansiUp = new AnsiUp();

      this.containerRef.innerHTML = ansiUp.ansi_to_html(asciiFlower[index].data);

      this.setState({
        currentFrameIndex: index,
      });
    }, 1000 / 30); // 30 frames per second
  }

  componentWillUnmount() {
    // Clean up the interval when the component is unmounted
    clearInterval(this.interval);
  }

  render() {
    return (
      <div id="flower" ref={(ref) => { this.containerRef = ref; }} />
    );
  }
}

export default AsciiAnimation;
