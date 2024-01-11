import React from 'react';

function MenuHeader() {
  return (
    <div style={{
      zIndex: '3',
      top: '1%',
      position: 'fixed',
      width: '100%',
      maxWidth: '100rem',
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: '1%',
      paddingRight: '1%',
      left: '50%',
      transform: 'translate(-50%, 0%)',
    }}
    >
      <a href="/">HOME</a>
      <a href="/projects">PROJECTS</a>
      <a href="/experience">EXPERIENCE</a>
      <a href=" ">CONTACT ME</a>
    </div>
  );
}

export default MenuHeader;
