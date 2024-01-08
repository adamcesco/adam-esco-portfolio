'use client';

import React from 'react';
import { AnsiUp } from 'ansi_up';
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
    this.interval = setInterval(() => {
      const { currentFrameIndex } = this.state;
      let index = currentFrameIndex;

      // Move to the next frame
      index += 1;

      // Reset to the first frame if we reach the end
      if (index === asciiFlower.length) {
        index = 0;
      }
      this.containerRef.innerHTML = (new AnsiUp()).ansi_to_html(asciiFlower[index].data);

      this.setState({
        currentFrameIndex: index,
      });
    }, 5);
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
