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
    const { title, description } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        id="card-link"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHoverExit}
        style={{
          position: 'relative',
          transform: isHovered ? 'translateY(-5px)' : 'none',
          boxShadow: isHovered ? 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px' : 'none',
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
      </div>
    );
  }
}

CardLink.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardLink;
