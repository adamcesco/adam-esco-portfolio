'use client';

import React from 'react';
import Image from 'next/image';
import flowerPng from '../../../public/flower-spinner.png';

class ScrollSpinner extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollSpinnerAngle: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollY } = window;
    this.setState({ scrollSpinnerAngle: (scrollY / 4) % 360 });
  }

  render() {
    const { scrollSpinnerAngle } = this.state;
    return (
      <Image
        src={flowerPng}
        width={100}
        height={100}
        alt="scroll spinner"
        style={{
          position: 'fixed',
          top: '5%',
          right: '2.5%',
          transform: `rotate(${scrollSpinnerAngle}deg)`,
        }}
      />
    );
  }
}

export default ScrollSpinner;
