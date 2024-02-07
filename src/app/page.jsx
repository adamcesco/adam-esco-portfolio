import React from 'react';

// eslint-disable-next-line import/no-unresolved, import/extensions
import AsciiFlower from '@/widgets/AsciiCalc';
import './page.css';

export default function Home() {
  return (
    <>
      <div id="ascii-flower-container">
        <AsciiFlower />
      </div>
      <div id="welcome-page">
        <div id="welcome-text-div" style={{ zIndex: '1' }}>
          <h1 className="welcome-name">
            Hello. I&apos;m Adam.
          </h1>
          <h1 className="welcome-name">
            A Software
            <br />
            Engineer.
          </h1>
          <p className="description">
            I&apos;m passionate about creating tools that
            <br />
            perfectly meet the needs of the user.
          </p>
        </div>
      </div>
    </>
  );
}
