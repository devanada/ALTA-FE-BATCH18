function palindrome(word: string) {
  // your code here
  const reversedWord = word.split("").reverse().join("");
  return reversedWord === word;
}

console.log(palindrome("civic")); // true
console.log(palindrome("katak")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false
