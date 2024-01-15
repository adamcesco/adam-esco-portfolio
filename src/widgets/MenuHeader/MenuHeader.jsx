import React from 'react';
import './MenuHeader.css';

function MenuHeader() {
  return (
    <div id="button-container">
      <p className="header-button" style={{ backgroundColor: 'black', color: 'white' }}>
        MENU
      </p>
      <p
        className="header-button"
        style={{
          backgroundColor: 'transparent',
          color: 'black',
        }}
      >
        EMAIL
      </p>
    </div>
  );
}

export default MenuHeader;
