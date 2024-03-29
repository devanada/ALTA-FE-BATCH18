/**
 * Mengenkripsi suatu kata dengan menggunakan metode pergeseran alfabet sebanyak 10 deretan.
 * @param {string} sentence Kata yang ingin kita enkripsi.
 * @returns string
 */
function changeWord(sentence) {
  // your code here
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      result += sentence[i];
      continue;
    }

    const ascii = sentence[i].charCodeAt(0);
    let newAscii = ascii + 10;

    if (newAscii > 90) {
      newAscii -= 26;
    }

    const newChar = String.fromCharCode(newAscii);
    result += newChar;
  }

  return result;
}

console.log(changeWord("SEPULSA OKE")); // COZEVCK YUO
console.log(changeWord("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(changeWord("INDONESIA")); // SXNYXOCSK
console.log(changeWord("GOLANG")); // QYVKXQ
console.log(changeWord("PROGRAMMER")); // ZBYQBKWWOB
