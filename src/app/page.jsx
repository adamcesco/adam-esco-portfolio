/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

import AsciiFlower from '@/widgets/AsciiCalc';
import CardLink from '@/widgets/CardLink';
import './page.css';

export default function Home() {
  return (
    <>
      <div id="ascii-flower-container">
        <AsciiFlower />
      </div>
      <div id="welcome-section">
        <div id="welcome-text-div">
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
      <div id="continued-section">
        <div id="about-text-container">
          {/* will contain an about me paragraph */}
          <h2 className="section-header">About Me</h2>
          <p>
            I&apos;m a software engineer with a passion for creating tools that
            perfectly meet the needs of an audience. I&apos;m currently a student
            at the Southern Methodist University, studying Computer Science and
            Engineering. I&apos;m also a teaching assistant for the Computer
            Science department, where I help students understand the material and
            solve problems.
          </p>
        </div>
        <div id="experience-timeline-container">
          {/* will be similar to the skill timeline found here: https://www.seanhalpin.xyz/about */}
        </div>
        <div id="projects-container">
          {/* will contain all relevant projects */}
        </div>
        <div id="tutorials-container">
          {/* will contain all the tutorials you have written for your Data Structures class */}
          <p>
            I&apos;ve written a few tutorials for my Data Structures class. You can
            find them below:
          </p>
          <CardLink
            title="Tutorials Folder"
            description="Google Drive folder"
          />
        </div>
      </div>
    </>
  );
}
