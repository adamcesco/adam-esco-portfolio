import React from 'react';

// eslint-disable-next-line import/no-unresolved, import/extensions
import AsciiFlower from '@/widgets/AsciiCalc';
import './page.css';

export default function Home() {
  return (
    <div id="welcome-page">
      {/* left vertical center */}
      <div id="welcome-text-div" style={{ zIndex: '1' }}>
        <h1 id="welcome-name">
          ADAM
          <br />
          ESCOBEDO
        </h1>
        <h2 id="welcome-text" style={{ marginTop: '15vh' }}>
          &darr; Learning, Creating, and Sharing &darr;
        </h2>
      </div>

      {/* background right ascii art video */}
      <div style={{ zIndex: '2' }}>
        <AsciiFlower />
      </div>

      {/* cool footer */}
      {/* scroll down to see: */}
      {/*   "completed" projects menu/display */}
      {/*   "in progress" projects menu/display */}
    </div>
  );
}
