import React from 'react';
import PropTypes from 'prop-types';

function CardProject({
  size,
  title,
  description,
  photo,
}) {
  // Add your component logic here

  return (
    // Add your JSX code here
    <div className={`card-project ${size}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={photo} alt={title} />
    </div>
  );
}

CardProject.propTypes = {
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default CardProject;
