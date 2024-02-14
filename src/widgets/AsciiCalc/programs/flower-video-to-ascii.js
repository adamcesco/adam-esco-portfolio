// eslint-disable-next-line import/extensions
import { length, sub } from '../core/vec2.js';

// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import framesJson from '/public/frames-ascii-flower.json';

export const settings = { fps: 30, allowSelect: false };

const charMap = [' ', '#', '(', ',', '@', 'S', 'g'];

const bgMap = [
  '#00005f',
  '#005f00',
  '#005f5f',
  '#5f5f00',
  '#5f5f87',
  '#5f8700',
  '#5f875f',
  '#5f8787',
  '#875f00',
  '#875f5f',
  '#878700',
  '#87875f',
  '#878787',
  '#8787af',
  '#87af5f',
  '#87af87',
  '#87afaf',
  '#87afd7',
  '#af5f00',
  '#af5f5f',
  '#af8700',
  '#af875f',
  '#af8787',
  '#af87af',
  '#afaf5f',
  '#afaf87',
  '#b0c59f',
  '#afafd7',
  '#afafff',
  '#afd787',
  '#afd7af',
  '#afd7d7',
  '#afd7ff',
  '#d78700',
  '#d7875f',
  '#d7af5f',
  '#d7af87',
  '#d7afaf',
  '#d7afd7',
  '#d7d787',
  '#d7d7af',
  '#d7d7d7',
  '#d7d7ff',
  '#d7ffd7',
  '#d7ffff',
  '#ffd7af',
  '#ffd7d7',
  '#ffd7ff',
  '#ffffd7',
  '#00000000',
  '#eeeeee',
];

// eslint-disable-next-line max-len
const fgIndexMap = [
  '#000000',
  '#00005f',
  '#005f00',
  '#005f5f',
  '#5f0000',
  '#5f005f',
  '#5f5f00',
  '#5f5f5f',
  '#5f5f87',
  '#5f5faf',
  '#5f8700',
  '#5f875f',
  '#5f8787',
  '#870000',
  '#875f00',
  '#875f5f',
  '#875f87',
  '#878700',
  '#87875f',
  '#878787',
  '#8787af',
  '#8787d7',
  '#87af00',
  '#87af5f',
  '#87af87',
  '#87afaf',
  '#87afd7',
  '#af5f00',
  '#af5f5f',
  '#af8700',
  '#af875f',
  '#af8787',
  '#af87af',
  '#afaf00',
  '#afaf5f',
  '#afaf87',
  '#afafaf',
  '#afafd7',
  '#afafff',
  '#afd787',
  '#afd7af',
  '#afd7d7',
  '#afd7ff',
  '#d78700',
  '#d7875f',
  '#d7af5f',
  '#d7af87',
  '#d7afaf',
  '#d7afd7',
  '#d7afff',
  '#d7d787',
  '#d7d7af',
  '#d7d7d7',
  '#d7d7ff',
  '#d7ffaf',
  '#d7ffd7',
  '#d7ffff',
  '#ffd7af',
  '#ffd7d7',
  '#ffd7ff',
  '#ffffd7',
  '#ffffff',
];

const favoriteNumber = [
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
];

export function main(coord, context, cursor) {
  let frameIndex = Math.floor(context.frame * 0.3);
  // the closer the frameIndex is to 750, the slower the animation
  if (frameIndex > 520) { // the last frame is at framesJson[749]
    frameIndex = 520;
  }

  // add bounds checking for coord
  if (coord.y >= framesJson[frameIndex].length) {
    return ' ';
  }
  if (coord.x >= framesJson[frameIndex][coord.y].length) {
    return ' ';
  }

  const res = framesJson[frameIndex][coord.y][Math.max(coord.x - 15, 0)];
  // turn res into a binary string
  const binary = res.charCodeAt(0).toString(2).padStart(8, '0') + res.charCodeAt(1).toString(2).padStart(8, '0');
  const bgIndex = parseInt(binary.slice(1, 7), 2);
  const fgIndex = parseInt(binary.slice(7, 13), 2);
  const charIndex = parseInt(binary.slice(13, 16), 2);

  const bg = bgMap[bgIndex];
  const fg = fgIndexMap[fgIndex];
  const ch = charMap[charIndex];

  if ((bg === '#00000000' && ch === ' ') || coord.x < 15) {
    const m = Math.min(context.cols * context.metrics.aspect, context.rows);
    const st = {
      x: 2.0 * ((coord.x - context.cols / 2) / m) * context.metrics.aspect, // apply aspect
      y: 2.0 * ((coord.y - context.rows / 2) / m),
    };
    const pointer = {
      x: 2.0 * ((cursor.x - context.cols / 2) / m) * context.metrics.aspect,
      y: 2.0 * ((cursor.y - context.rows / 2) / m),
    };
    const distFromCursor = length(sub(st, pointer));

    const displayChar = favoriteNumber[
      Math.floor(((coord.y / 2) * ((context.cols / 2) + 1)) + (coord.x / 2)) % favoriteNumber.length
    ];

    const bgChar = (distFromCursor < 1.5 && (coord.x % 2 === 0 && coord.y % 2 === 0)) ? displayChar : ' ';

    return {
      char: bgChar,
      color: '#9d9d9d',
      backgroundColor: '#00000000',
    };
  }

  return {
    char: ch,
    color: fg,
    backgroundColor: bg,
  };
}
