'use client';

import React from 'react';
import './MenuHeader.css';

class MenuHeader extends React.Component {
  // add functionality for an animation that displays what menu item was recently clicked
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      avtive: false,
    };
  }

  render() {
    return (
      <div id="menu-header">
        <a href="/#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#tutorials">Tutorials</a>
        <a href="mailto:acescobedo@smu.edu">Email</a>
      </div>
    );
  }
}

export default MenuHeader;
