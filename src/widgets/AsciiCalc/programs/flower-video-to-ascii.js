import framesJson from '../frames-ascii-flower.json';

export const settings = { fps: 60 };

const charMap = [' ', '#', '(', ',', '@', 'S', 'g'];

// eslint-disable-next-line max-len
const bgMap = [17, 22, 58, 60, 64, 65, 66, 94, 95, 96, 100, 101, 102, 103, 104, 107, 108, 109, 110, 130, 131, 136, 137, 138, 139, 143, 144, 145, 146, 147, 150, 151, 152, 153, 173, 179, 180, 181, 182, 186, 187, 188, 189, 194, 195, 224, 225, 230, 231, 255];

// eslint-disable-next-line max-len
const fgIndexMap = [16, 17, 22, 23, 52, 53, 58, 59, 60, 64, 65, 66, 88, 94, 95, 96, 100, 101, 102, 103, 104, 106, 107, 108, 109, 110, 130, 131, 136, 137, 138, 139, 142, 143, 144, 145, 146, 147, 150, 151, 152, 153, 172, 173, 179, 180, 181, 182, 183, 186, 187, 188, 189, 193, 194, 195, 217, 221, 223, 224, 225, 230, 231];

console.log('1');

export function main(coord, context) {
  const frameIndex = Math.floor(context.frame % 750);
  const res = framesJson[frameIndex][coord.y][coord.x];
  // turn res into a binary string
  const binary = res.charCodeAt(0).toString(2).padStart(8, '0') + res.charCodeAt(1).toString(2).padStart(8, '0');
  const bgIndex = parseInt(binary.slice(1, 7), 2);
  const fgIndex = parseInt(binary.slice(7, 13), 2);
  const charIndex = parseInt(binary.slice(13, 16), 2);

  const bg = bgMap[bgIndex];
  const fg = fgIndexMap[fgIndex];
  const char = charMap[charIndex];

  return char;
}

// return {
//   char: context.frame % 10,
//   color: `rgb(${r2},${g2},${b2})`,
//   backgroundColor: `rgb(${r1},${g1},${b1})`,
// };
