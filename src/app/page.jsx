import React from 'react';

// eslint-disable-next-line import/no-unresolved, import/extensions
import AsciiFlower from '@/widgets/AsciiCalc';
import './page.css';

export default function Home() {
  return (
    <>
      <button type="button" id="contact-button">CONTACT</button>
      <div id="welcome-page">
        <div id="welcome-text-div" style={{ zIndex: '1' }}>
          <h1 className="welcome-name" style={{ fontSize: '11.05rem', marginLeft: '-.04%' }}>
            ADAM
          </h1>
          <h1 className="welcome-name" style={{ fontSize: '6rem', marginLeft: '-.4%' }}>
            ESCOBEDO
          </h1>
        </div>

        <div style={{ zIndex: '2' }}>
          <AsciiFlower />
        </div>

        {/* cool footer */}
        {/* scroll down to see: */}
        {/*   "completed" projects menu/display */}
        {/*   "in progress" projects menu/display */}
      </div>
      <div style={{
        height: '100%',
        width: '100%',
      }}
      />
    </>
  );
}
