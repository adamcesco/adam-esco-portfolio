export const settings = {
  once: true,
};

export function main() {
  // Also try: ╩ ╦ or ▄ ░
  // or any combination from
  // https://play.ertdfgcvb.xyz/abc.html#font:characterset
  return Math.random() < 0.5 ? '╱' : '╲'
}

// return {
//   char: context.frame % 10,
//   color: `rgb(${r2},${g2},${b2})`,
//   backgroundColor: `rgb(${r1},${g1},${b1})`,
// };
