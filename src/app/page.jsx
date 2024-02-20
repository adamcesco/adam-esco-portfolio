/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

import AsciiFlower from '@/widgets/AsciiCalc';
import CardLink from '@/widgets/CardLink';
import CardProject from '@/widgets/CardProject';
import './page.css';

export default function Home() {
  return (
    <div id="all-content-container">
      <AsciiFlower />
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

      <div id="border-div" />
      <div id="continued-section">
        <div id="about-container">
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
          <div id="profile-links-container">
            <a
              href="https://www.linkedin.com/in/adamescobedo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/adamcesco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://medium.com/@adamcesco"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            <a
              href="mailto:acescobedo@smu.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              acescobedo@smu.edu
            </a>
            <a
              href="mailto:adamcbedo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              adamcbedo@gmail.com
            </a>
          </div>
        </div>

        <div id="experience-timeline-container">
          {/* will be similar to the skill timeline found here: https://www.seanhalpin.xyz/about */}
        </div>

        <div id="projects-container">
          <h2 id="projects" className="section-header">Projects</h2>
          <div id="projects-container-flex">
            <CardLink
              href="https://github.com/adamcesco"
              color="#b0cfbc"
              title="Profile"
              description="GitHub"
              src="/images/github-art.png"
            />
            <div id="project-links-container">
              <CardProject
                href="https://github.com/instaloader/instaloader"
                title="Instaloader"
                description="Open-source Instagram API, streamlining API for direct post metadata access."
                languages="Python"
              />
              <CardProject
                href="https://github.com/adamcesco/monaco-qol-notes"
                title="ByteNotes"
                description="Notetaking app with AI-driven text analysis, suggesting research articles based on content."
                languages="Vue.js, JavaScript, React, Python, Rust"
              />
              <CardProject
                href="https://github.com/adamcesco/search-engine"
                title="Divide and Index"
                description="Hackathon-winning web-article indexer with multithreaded design for speed and efficiency."
                languages="C++, Bash"
              />
            </div>
          </div>
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
            href="https://drive.google.com/drive/folders/1xlKx3yQdYwoF2tRonQZlzRgM7MK2XltA?usp=sharing"
            color="#bde0f9"
            title="Tutorials Folder"
            description="Google Drive"
            src="/images/document-art.png"
          />
        </div>
      </div>
    </div>
  );
}
