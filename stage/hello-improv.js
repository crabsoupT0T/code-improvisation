// STAGE PIECE — unfinished on purpose.
// Prompt: write a function that takes a half-baked idea and returns
// three ways someone else could remix it.
//
// Drop your riff in remixes/ or open a PR that replaces this file.

export function riff(idea) {
  return [
    `What if ${idea} ran in the browser?`,
    `What if ${idea} had no dependencies?`,
    `What if ${idea} was a one-liner someone else hates?`,
  ];
}

console.log(riff("a reddit for unfinished code"));
