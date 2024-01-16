function meanMedian(numbers: number[]) {
  // your code here
  return `${calculateMean(numbers)} ${calculateMedian(numbers)}`;
}

function calculateMean(numbers: number[]) {
  const sumNumber = numbers.reduce((a, b) => a + b, 0);
  return sumNumber / numbers.length;
}

function calculateMedian(numbers: number[]) {
  let mid = numbers.length / 2;

  if (numbers.length % 2 === 0) {
    mid = numbers[mid - 1] + numbers[mid];
    return mid / 2;
  } else {
    return numbers[Math.floor(mid)];
  }
}

console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30
