/*
- Array adalah sebuah tipe data yang mana dia digunakan untuk menyimpan kumpulan informasi/data yang disimpan secara berurutan didalam satu variabel.
- Setiap item/element yang ada di dalam array memiliki index yang sifatnya zero-based, artinya untuk element pertama dimulai dari index 0, element kedua itu index 1, dan seterusnya
- String dan Array memiliki kesamaan satu sama lain, yaitu memiliki index di setiap element-nya
*/

const stringCoba = "Hello World";

// console.log(stringCoba[6]);

// ---=== DEKLARASI ARRAY ===---
let arrLiteral = [];
let arrConstructor = new Array();

let temp = ["Apple", 1, null, true, {}, []];
let fruits = ["Apple", "Orange", "Plum", "Banana"]; // array of string
let scores = [98, 85, 91, 78, 82]; // array of number

interface Posts {
  id: number;
  title: string;
}

let posts: Posts[] = [
  {
    id: 1,
    title: "Test 1",
  },
  {
    id: 2,
    title: "Test 2",
  },
  {
    id: 3,
    title: "Test 3",
  },
  {
    id: 4,
    title: "Test 4",
  },
]; // array of object

let items = [
  [1, 2],
  [3, 4],
  [5, 6],
]; // multidimentional array

// ---=== MENGAKSES ELEMENT DI ARRAY ===---
// console.log(fruits[0]); // Apple
// console.log(scores[1]); // 85
// console.log(posts[0].title); // Test 1
// console.log(posts[0]["title"]); // Test 1
// // console.log(posts.title); // Property 'title' does not exist on type 'Posts[]'
// console.log(items[1][1]); // 4

// ---=== MENGGANTI/MERUBAH NILAI YANG SUDAH ADA DARI SEBUAH ELEMENT ===---
// fruits[2] = "Pear";
// posts[1].title = "Test Change 2";

// ---=== MENAMBAHKAN ELEMENT DI SEBUAH ARRAY ===---
fruits[4] = "Lemon"; // menambahkan element di spesifik index, atau merubah jikalau sudah ada element yang ada
fruits.push("Melon"); // menambahkan element di akhir array
fruits.unshift("Date"); // menambahkan element di awal array

// ---=== MENGHAPUS ELEMENT DI SEBUAH ARRAY ===---
fruits.pop(); // menghapus element terakhir dari sebuah array
fruits.shift(); // menghapus element pertama dari sebuah array

const filteredFruits = fruits.filter((fruit) => fruit !== "Plum");

// console.log(fruits);
// console.log(filteredFruits);

let fruits2 = ["Apple", "Pear", "Lemon", "Banana", "Avocado"];
// fruits2.splice(2, 2); // menghapus element dimulai dari index 2 dengan element yang di hapus sebanyak 2
// fruits2.splice(2, 2, "SOLD OUT", "SOLD OUT"); // menghapus element dimulai dari index 2 dengan element yang di hapus sebanyak 2, setelah itu menambahkan element baru di index yang telah di hapus sebelumnya

fruits2.splice(2, 0, "Jackfruit", "Starfruit"); // tidak melakukan penghapusan element karena delete count yang didefinisikan adalah 0, jadinya dia akan menambahkan element baru dimulai dari index 2

// console.log(fruits2);

// ---=== MENDUPLIKASI SEBUAH ARRAY ===---
let sample = ["A", "B", "C", "D", "E", "F"];
let dupeSample = sample.slice(); // menduplikasi keseluruhan element di sebuah array
let halfDupe = sample.slice(0, sample.length / 2); // menduplikasi element dimulai dari index 0 sampai index tengah dari sebuah array
let endDupe = sample.slice(sample.length / 2); // menduplikasi element dimulai dari index tengah sampai akhir

// console.log(halfDupe);
// console.log(endDupe);

// ---=== MENGGABUNGKAN SEBUAH ARRAY DENGAN ARRAY LAINNYA ===---
let spreadDupe = [...halfDupe, ...endDupe, ...sample]; // menggabungkan array dengan menggunakan spread operator
let concatDupe = halfDupe.concat(endDupe); // menggabungkan array dengan menggunakan method concat

// console.log(spreadDupe);

/*
ada satu cara buat menghapus/mengeliminasi sebuah array dan juga sekaligus menggabungkan array
*/

// ---=== PERULANGAN PADA ARRAY ===---
/*
- for
- for in
- for of
- forEach
- map
*/

for (let i = 0; i < fruits2.length; i++) {
  //   console.log(`${i}: ${fruits2[i]}`);
}

for (const fruit of fruits2) {
  //   console.log(fruit);
}

for (const key in fruits2) {
  //   console.log(`${key}: ${fruits2[key]}`);
}

// fruits2.forEach((fruit, index) => console.log(`${index}: ${fruit}`));
// fruits2.map((fruit, index) => console.log(`${index}: ${fruit}`));

interface Bike {
  id?: number;
  name: string;
  description: string;
  price: number;
}

let bikes: Bike[] = [
  {
    name: "Beat emak-emak",
    description: "Penguasa jalanan",
    price: 100,
  },
  {
    name: "Supra bapak",
    description: "Batok geter",
    price: 150,
  },
  {
    name: "Aerox",
    description: "Aerox tidak dibeli, pintu ku tendang",
    price: 250,
  },
];

// forEach bisa digunakan untuk menambahkan property baru didalam suatu element pada array
bikes.forEach((bike, index) => {
  bike.id = index + 1;
});

// console.log(bikes);

/*
map selain bisa menambahkan propert baru dalam suatu element di array, dia juga dapat me-return property tertentu yang dipilih seperti berikut.
selain itu map juga biasa digunakan untuk melakukan perulangan pada sebuah component/element, jadi kita membuat component cukup 1 saja namun nantinya ketika didalam document HTML dia nanti bisa muncul lebih dari 1 tergantung dari seberapa banyak item/data yang ada didalam sebuah array.
*/
const cobaCoba = bikes.map((bike) => {
  return { name: bike.name, description: bike.description };
});

console.log(bikes);
console.log(cobaCoba);
