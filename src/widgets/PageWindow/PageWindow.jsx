import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function PageWindow({
  src,
  size,
  tags,
  description,
  color,
  hoverText
}) {
  let width = '0';
  let height = '0';

  switch (size) {
    case 'small':
      width = '33%';
      height = '50%';
      break;

    case 'medium':
      width = '50%';
      height = '90%';
      break;

    case 'large':
      width = '66%';
      height = '90%';
      break;

    case 'large-compliment':
      width = '33%';
      height = '90%';
      break;

    default:
      break;
  }

  return (
    <>
      <Image
        src={src}
        width={width}
        height={height}
        alt=""
      />

      {/* container */}
      <div>
        {/* tags */}
        <div></div>

        {/* description */}
        <div></div>
      </div>
    </>
  )
}
PageWindow.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  hoverText: PropTypes.string.isRequired,
};
