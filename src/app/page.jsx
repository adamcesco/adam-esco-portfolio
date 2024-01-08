import React from 'react';

import AsciiAnimation from '../widgets/AsciiAnimation';
import './page.css';

export default function Home() {
  return (
    <div id="welcome-page">
      {/* background right ascii art video */}
      <AsciiAnimation />

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
