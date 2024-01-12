/*
syntax variabel
const variableName = value
*/

// ---=== DEKLARASI VARIABEL ===---
let variabelLet = "Hello Let";
const variabelConst = "Hello Const";
var variabelVar = "Hello Var";

// console.log(variabelLet, variabelConst, variabelVar);

// ---=== REDECLARE ===---
var cobaCoba = 123; // v
var cobaCoba = 345; // v

// let cobaIh = "Hello"; // x
// let cobaIh = "World"; // x

// const cobaAh = "Hello"; // x
// const cobaAh = "World"; // x

// console.log(cobaCoba);

// ---=== HOISTING ===---
// console.log(varKedua);

// var varKedua = "Test"; // v
// let varKetiga = "Test"; // x
// const varKeempat = "Test"; // x

// ---=== REASSIGN ===---

var cobaSatu: string = "TEST";
let cobaDua = "TEST";
const cobaTiga = "TEST";

cobaSatu = "CIHUY"; // v
cobaDua = "CIHUY"; // v
// cobaTiga = "CIHUY"; // x

console.log(cobaSatu, cobaDua, cobaTiga);

/*
Saran mending pakai let kalau misalnya temen-temen membutuhkan variabel yang bisa dirubah nilainya. Kalau misalkan mendeklarasikan variabel, namun nilainya tidak perlu dirubah maka bisa pakai const.
*/
