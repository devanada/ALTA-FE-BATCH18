/*
#1

if (condition1) {
    ...
} else if (condition2) {
    ...
} else {
    ...
}
*/

function isOdd(number: number) {
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

// console.log(isOdd(5));

/*
#2

condition ? true : false
*/

function isOddTernary(number: number) {
  return number % 2 === 0 ? false : true;
}

// console.log(isOddTernary(4));

/*
switch (variable) {
    case condition1:
        ...
    case condition2:
        ...
    default:
        ...
}
*/

function isOddSwitch(number: number) {
  switch (number % 2 === 0) {
    case true:
      return false;
    default:
      return true;
  }
}

// console.log(isOddSwitch(5));

function tryIfElse(rank: number) {
  if (rank === 1) {
    console.log("Numba wan");
  } else if (rank === 2) {
    console.log("Not bad for second place");
  } else if (rank === 3) {
    console.log("Welp, okay third place");
  } else {
    console.log("Bersukur");
  }
}

function trySwitch(rank: number) {
  switch (rank) {
    case 1:
      console.log("Numba wan");
      break;
    case 2:
      console.log("Not bad for second place");
      break;
    case 3:
      console.log("Welp, okay third place");
      break;
    default:
      console.log("Bersyukur");
      break;
  }
}

function tryTernary(rank: number) {
  const result =
    rank === 1
      ? "Numba wan"
      : rank === 2
      ? "Not bad for second place"
      : rank === 3
      ? "Welp, okay third place"
      : "Bersyukur";
  console.log(result);
}

tryIfElse(2);
trySwitch(2);
tryTernary(2);
