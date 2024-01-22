import React from 'react';

// eslint-disable-next-line import/no-unresolved, import/extensions
import AsciiFlower from '@/widgets/AsciiCalc';
import './page.css';

export default function Home() {
  return (
    <>
      <AsciiFlower />
      <div id="welcome-page">
        <div id="welcome-text-div" style={{ zIndex: '1' }}>
          <h1 className="welcome-name" style={{ position: 'relative', fontSize: '9.208rem', left: '-.04%' }}>
            ADAM
          </h1>
          <h1 className="welcome-name" style={{ position: 'relative', fontSize: '5rem', left: '-.94%' }}>
            ESCOBEDO
          </h1>
          <p> I&apos;m a software engineer. </p>
          <p> Look around and learn about me! </p>
        </div>
      </div>
    </>
  );
}
