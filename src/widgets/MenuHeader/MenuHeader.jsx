import React from 'react';

function MenuHeader() {
  return (
    <button
      type="button"
      style={{
        fontSize: 'medium',
        background: 'none',
        cursor: 'pointer',
        position: 'fixed',
        zIndex: '4',
        top: '4%',
        left: '4%',
        padding: '.5rem .9rem .5rem .9em',
        borderRadius: '2rem',
        fontWeight: '400',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: 'black',
        borderStyle: 'solid',
        borderWidth: '.05rem',
        backgroundColor: '#fafbf0',
      }}
    >
      MENU
    </button>
  );
}

export default MenuHeader;
