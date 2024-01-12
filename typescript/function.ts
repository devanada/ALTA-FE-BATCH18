/*
- name = nama dari function, yang ditulis secara deskriptif tergantung dari apa yang dia proses didalamnya
- param = parameter atau inputan yang didapat atau dideklarasikan diluar dari function tersebut yang mana sifatnya opsional

function expression
function name(param) {
    ...
}

arrow function
const name = (param) => {
    ...
}

() => void
*/

// ---=== FUNCTION DECLARATION ===---
function greeting(hour: number) {
  if (hour < 12) {
    console.log("selamat pagi");
  } else if (hour < 18) {
    console.log("selamat sore");
  } else {
    console.log("selamat malam");
  }
}

// greeting(18);

function multiply(a: number, b: number) {
  const result = a * b;
  return result;
}

function multiply2(a: number, b: number) {
  const result = a * b;
  console.log(result);
}

// console.log(multiply(2, 3)); // 6
// console.log(multiply2(2, 3)); // 6 dan undefined

// multiply(2, 3); // (nilai tidak tampil di terminal)
// multiply2(2, 3); // 6

// ---=== ARROW FUNCTION ===---
const arrowMultiply = (a: number, b: number): number => {
  return a * b;
};

const arrowDivision = (a: number, b: number) => a / b;

// console.log(arrowMultiply(2, 3));

function luasSegitiga(a: number, b: number) {
  //   const result = arrowDivision(arrowMultiply(a, b), 2);
  const perkalian = arrowMultiply(a, b);
  const pembagian = arrowDivision(perkalian, 2);
  return pembagian;
}

console.log(luasSegitiga(2, 3));
