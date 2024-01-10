import React from 'react';

// eslint-disable-next-line import/no-unresolved, import/extensions
import AsciiFlower from '@/widgets/AsciiCalc';
import './page.css';

export default function Home() {
  return (
    <div id="welcome-page">
      {/* background right ascii art video */}
      <AsciiFlower />

      {/* left vertical center */}
      <div>
        <p>
          Computer Science Student and Teaching Assistant.
          <br />
          From Houston, TX.
          <br />
          Loves furniture and art.
        </p>
      </div>

      {/* cool footer */}
      {/* scroll down to see: */}
      {/*   "completed" projects menu/display */}
      {/*   "in progress" projects menu/display */}
    </div>
  );
}
