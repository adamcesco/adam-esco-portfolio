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
          <h1 className="welcome-name" style={{ position: 'relative', fontSize: '11.05rem', left: '-.04%' }}>
            ADAM
          </h1>
          <h1 className="welcome-name" style={{ position: 'relative', fontSize: '6rem', left: '-.94%' }}>
            ESCOBEDO
          </h1>
        </div>
      </div>
    </>
  );
}
