/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import { run } from './run.js';
import * as program from './programs/flower-video-to-ascii.js';

function AsciiFlower() {
  // create ref to pre element
  const preRef = React.createRef(null);

  useEffect(() => {
    run(program, { element: preRef.current }).then((e) => {
      console.log(e);
    }).catch((e) => {
      console.warn(e.message);
      console.log(e.error);
    });
  }, []);

  return (
    <pre
      ref={preRef}
      style={{
        position: ' absolute',
        margin: '0',
        padding: '0',
        left: '0',
        top: '0',
        height: '100%',
        width: '100%',
        fontSize: '1em',
        lineHeight: '1.2',
        fontFamily: "'Simple Console', monospace",
      }}
    />
  );
}

export default AsciiFlower;
