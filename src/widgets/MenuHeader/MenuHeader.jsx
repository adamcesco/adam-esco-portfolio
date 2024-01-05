import React from 'react';

function MenuHeader() {
  return (
    <div style={{
      top: '1%',
      width: '100%',
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: '1%',
      paddingRight: '1%',
      position: 'fixed',
    }}
    >
      <a href="/">HOME</a>
      <a href="/projects">PROJECTS</a>
      <a href="/experience">EXPERIENCE</a>
      <a href="mailto:acescobedo@smu.edu">acescobedo@smu.edu</a>
    </div>
  );
}

export default MenuHeader;
