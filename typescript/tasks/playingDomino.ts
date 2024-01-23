function playingDomino(cards: number[][], deck: number[]): number[] {
  // your code here
  let result: number[] = [];
  let highSum = 0;

  for (const card of cards) {
    const isPresent = deck.some((number) => card.includes(number));
    const temp = card.reduce((a, b) => a + b, 0);

    if (isPresent) {
      if (highSum < temp) {
        result = card;
        highSum = temp;
      }
    }
  }

  return result;
}

console.log(
  playingDomino(
    [
      [6, 5],
      [3, 4],
      [2, 1],
      [3, 3],
    ],
    [4, 3]
  )
); // [3, 4]
console.log(
  playingDomino(
    [
      [6, 5],
      [3, 3],
      [3, 4],
      [2, 1],
    ],
    [3, 6]
  )
); // [6, 5]
console.log(
  playingDomino(
    [
      [6, 6],
      [2, 4],
      [3, 6],
    ],
    [5, 1]
  )
); // []

export default playingDomino;
