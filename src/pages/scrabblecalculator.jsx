import React from 'react';
import ScrabbleaArt from '../widgets/ScrabbleArt';

export default function ScrabbleCalculator() {
  return (
    <>
      {/* left half */}
      <div>
        <h1>Scrabble Calculator</h1>

        {/* link bar */}
        <div>
          <a href="https://www.icontact-archive.com/archive?c=1384631&f=6038&s=10116&m=310159&t=650b9db00f5228ee57432048f1967e4ef1b454e708354ae751c2b95d07c97caf">Article Feature</a>
          <a href="https://github.com/adamcesco/Unofficial-Scrabble-Library">Github Repository</a>
          <a href="https://github.com/adamcesco/Unofficial-Scrabble-Library/blob/main/README.md">README</a>
        </div>
        <ScrabbleaArt />
      </div>

      {/* right half */}
      <div>
        <h2>Summary Summary Summary Summary Summary Summary Summary Summary</h2>
        {/* repeating little tile-art */}
        {/* nice picture of vintage scrabble */}
        {/* discussion about the project */}
      </div>
    </>
  );
}
