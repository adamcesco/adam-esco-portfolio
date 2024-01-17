/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

import AsciiFlower from '@/widgets/AsciiCalc';
import PageWindow from '@/widgets/PageWindow';
import './page.css';

export default function Home() {
  return (
    <>
      <AsciiFlower />
      <button type="button" id="contact-button">EMAIL</button>
      <div id="welcome-page">
        <div id="welcome-text-div" style={{ zIndex: '1' }}>
          <h1 className="welcome-name" style={{ fontSize: '11.05rem', marginLeft: '-.04%' }}>
            ADAM
          </h1>
          <h1 className="welcome-name" style={{ fontSize: '6rem', marginLeft: '-.94%' }}>
            ESCOBEDO
          </h1>
        </div>

        {/* cool footer */}
        {/* scroll down to see: */}
        {/*   "completed" projects menu/display */}
        {/*   "in progress" projects menu/display */}
      </div>
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '3.3rem',
          backgroundColor: '#3d3d3d',
          top: '-.5rem',
        }}
      />
      <div id="page-2">
        <PageWindow
          src=""
          size="small"
          tags={['', '', '']}
          description=""
          color=""
          hoverText=""
        />
        <PageWindow
          src=""
          size="medium"
          tags={['', '', '']}
          description=""
          color=""
          hoverText=""
        />
        <PageWindow
          src=""
          size="large"
          tags={['', '', '']}
          description=""
          color=""
          hoverText=""
        />
      </div>
    </>
  );
}
