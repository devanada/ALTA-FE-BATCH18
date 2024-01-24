function coinChange(amount: number) {
  const coins = [25, 10, 5, 1];
  let result: number[] = [];
  //   let result: { [key: string]: number } = {};
  //   let result = "";
  let moneyLeftover = amount;

  for (const coin of coins) {
    while (moneyLeftover >= coin) {
      // CARA 1
      result.push(coin);
      // CARA 2
      //   if (result[coin]) {
      //     result[coin] += 1; // result[coin] = result[coin] + 1
      //   } else {
      //     result[coin] = 1;
      //   }
      // Cara 3
      //   result += `${coin} `;

      moneyLeftover -= coin; // moneyLeftover = moneyLeftover - coin
    }
  }

  return result;
}

console.log(coinChange(42)); // [25, 10, 5, 1, 1]
