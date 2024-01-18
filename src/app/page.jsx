/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

import AsciiFlower from '@/widgets/AsciiCalc';
import './page.css';

export default function Home() {
  return (
    <>
      <AsciiFlower />
      <button type="button" id="contact-button">EMAIL</button>
      <div id="welcome-page">
        <div id="welcome-text-div" style={{ zIndex: '3' }}>
          <h1 className="welcome-name" style={{ fontSize: '11.05rem', marginLeft: '-.04%' }}>
            ADAM
          </h1>
          <h1 className="welcome-name" style={{ fontSize: '6rem', marginLeft: '-.94%' }}>
            ESCOBEDO
          </h1>
          <h2 id="welcome-description">
            Loves software engineering, art, and furniture design.
            <br />
            Click around and learn about me.
          </h2>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '5vh',
          backgroundColor: 'color: rgb(89, 89, 89);',
          top: '-1vh',
        }}
      />
      <div id="second-page">
        <div id="title-container" style={{ zIndex: '3' }}>
          <p className="title">
            SOFTWARE ENGINEER
          </p>
          <p className="title">
            EX-AMAZON INTERN
          </p>
          <p className="title">
            EX-AT&amp;T INTERN
          </p>
          <p className="title">
            PENDING-PATENT HOLDER
          </p>
          <p className="title">
            SOUTHERN METHODIST UNIVERSITY
          </p>
          <p className="title">
            BACHELOR OF SCIENCE
          </p>
          <p className="title">
            COMPUTER SCIENCE
          </p>
          <p className="title">
            2024 GRADUATE
          </p>
        </div>
        <div id="footer-container" style={{ zIndex: '3' }}>
          <p id="footer-text-title">
            HOW THIS WHITE LILY WAS RENDERED:
          </p>
          <div id="bottom-text-container">
            <div id="left-text-container" className="poster-text" style={{ zIndex: '3' }}>
              <p>
                White Lily model is rendered by Three.js, a WebGL renderer.
                The model is a 3D scan of a White Lily flower blooming over
                the course of three months. The model is rendered with a custom
                shader that uses the position and color of a cell of pixels to
                determine what ASCII characters are rendered.
              </p>
              <p>
                The White Lily is a flower native to the Balkans and the Middle East.
                It is a perennial plant that prefers full sun and well-drained soil.
                It is a flower that is often used in religious ceremonies and is a
                symbol of purity and innocence. It&apos;s purple color is due to the
                presence of anthocyanins in the petals.
              </p>
            </div>
            <p className="page-number">
              02
            </p>
          </div>
          <div className="footer">
            <p>
              FROM HOUSTON, TEXAS --- CURRENTLY IN DALLAS, TEXAS
            </p>
            <p>
              PAGE INDEX 02
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
