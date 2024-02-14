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
      <div id="welcome-section">
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
            perfectly meet the needs of an audience.
          </p>
        </div>
      </div>
      <div id="about-section">
        <h1 className="section-header">About Me</h1>
        <p className="description">
          I&apos;m a software engineer with a passion for creating tools that
          perfectly meet the needs of an audience. I&apos;m currently a student
          at the Southern Methodist University, studying Computer Science and
          Engineering. I&apos;m also a teaching assistant for the Computer
          Science department, where I help students understand the material and
          solve problems.
        </p>
      </div>
    </>
  );
}
