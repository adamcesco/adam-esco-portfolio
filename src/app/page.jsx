import React from 'react';

// eslint-disable-next-line import/no-unresolved, import/extensions
import AsciiFlower from '@/widgets/AsciiCalc';
import './page.css';

export default function Home() {
  return (
    <div id="welcome-page">
      {/* left vertical center */}
      <h1 id="name-header" style={{ zIndex: '1' }}>
        Adam
        <br />
        Escobedo
      </h1>

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
