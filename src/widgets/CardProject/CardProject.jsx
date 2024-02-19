import React from 'react';
import PropTypes from 'prop-types';

import './CardProject.css';

function CardProject({
  href,
  title,
  description,
  languages,
}) {
  // Add your component logic here

  return (
    // if href is empty, the card will not be clickable
    // if href is not empty, the card will be clickable
    href === ''
      ? (
        <div id="card-project">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p id="languages">{languages}</p>
          </div>
        </div>
      )
      : (
        <a href={href} id="card-project">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p id="languages">{languages}</p>
          </div>
          <img src="/images/link-icon.png" alt={title} />
        </a>
      )
  );
}

CardProject.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
};

CardProject.defaultProps = {
  href: '',
};

export default CardProject;
