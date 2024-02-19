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
          <h2 id="about" className="section-header">About Me</h2>
          <p>
            I&apos;m a software engineer with a passion for creating tools that
            perfectly meet the needs of an audience. I&apos;m currently a student
            and teaching assistant at Southern Methodist University, and I have
            always had an interest in computer science. Most of my passion for
            this field comes from the satisfaction I get from creating tools that
            help people and from problem-solving.

            Learning more within computer science and all the neighboring fields has
            just always been fun for me, and I became a teaching assistant because I
            want it to be fun for everyone else too! I&apos;m always looking for new
            opportunities to learn and grow, and I&apos;m excited to see where my
            career takes me.
          </p>
        </div>
        <div id="experience-timeline-container">
          <h2 id="experience" className="section-header">Experience</h2>
          {/* will be similar to the skill timeline found here: https://www.seanhalpin.xyz/about */}
        </div>
        <div id="projects-container">
          <h2 id="projects" className="section-header">Projects</h2>
          {/* will contain all relevant projects */}
          <CardLink
            color="#b0cfbc"
            title="Profile"
            description="GitHub"
            src="/images/github-art.png"
          />
        </div>

        <h2 id="tutorials" className="section-header">Tutorials</h2>
        <div id="tutorials-container">
          {/* will contain all the tutorials you have written for your Data Structures class */}
          <div id="tutorials-text-container">
            <p id="tutorials-text">
              I&apos;ve written a few tutorials for my Data Structures class, but
              they can help anyone coding in C++ on VS Code. These tutorials have
              been edited and kept up to date by the other Data Structure TAs and
              myself for a while, so hopefully they help! You can find them below:
            </p>
            <ul>
              <li>(Mac Computers Only) Installing and Setting-Up VS Code</li>
              <li>(Windows Computers Only) Installing and Setting-Up VS Code</li>
              <li>(Windows Computers Only) Downgrading VSCode to Version 1.85</li>
              <li>How to Clone a Github Repository Using VSCode</li>
            </ul>
          </div>
          <CardLink
            color="#bde0f9"
            title="Tutorials Folder"
            description="Google Drive"
            src="/images/document-art.png"
          />
        </div>
      </div>
    </>
  );
}
