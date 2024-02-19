'use client';

import React from 'react';
import PropTypes from 'prop-types';

import './CardLink.css';

class CardLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleHover = () => {
    this.setState({ isHovered: true });
  };

  handleHoverExit = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { color, title, description } = this.props;
    const { isHovered } = this.state;

    return (
      <a
        href="https://drive.google.com/drive/folders/1xlKx3yQdYwoF2tRonQZlzRgM7MK2XltA?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        id="card-link"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHoverExit}
        style={{
          backgroundColor: color,
          position: 'relative',
          transform: isHovered ? 'translateY(-5px)' : 'none',
          boxShadow: isHovered ? 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <img
          src="/images/document-art.png"
          alt="Document clip art"
          style={{
            transform: isHovered ? 'translateY(17px)' : 'none',
            transition: 'transform 0.4s ease',
          }}
        />
      </a>
    );
  }
}

CardLink.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardLink;
