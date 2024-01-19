function sortBuiltIn(elements: number[]): number[] {
  console.time("BUILT IN SORT");

  const result = elements.sort((a, b) => {
    // a adalah nilai awal
    // b adalah nilai setelah a
    return a - b; // ASC
    // return b - a; // DESC
  });

  console.timeEnd("BUILT IN SORT");
  return result;
}

const array = [
  67, 79, 90, 81, 59, 38, 85, 77, 57, 63, 53, 84, 27, 51, 22, 6, 76, 73, 21, 75,
  66, 55, 11, 12, 68, 60, 52, 83, 24, 20, 26, 95, 70, 17, 54, 72, 8, 30, 45, 16,
  56, 19, 61, 33, 36, 91, 4, 39, 25, 47, 28, 93, 48, 89, 5, 71, 15, 65, 23, 87,
  10, 1, 3, 2, 29, 40, 9, 78, 50, 7, 13, 58, 31, 100, 94, 69, 97, 34, 41, 18,
  74, 88, 35, 49, 99, 14, 82, 86, 62, 80, 44, 43, 32, 42, 64, 96, 46, 92, 37,
  98,
];

// console.log(sortBuiltIn(array));

interface Bike {
  id?: number;
  name: string;
  description: string;
  price: number;
}

let bikes: Bike[] = [
  {
    name: "Aerox",
    description: "Aerox tidak dibeli, pintu ku tendang",
    price: 250,
  },
  {
    name: "Supra bapak",
    description: "Batok geter",
    price: 120,
  },
  {
    name: "Beat emak-emak",
    description: "Penguasa jalanan",
    price: 130,
  },
];

const sortedBikes = bikes.sort((a, b) => {
  //   return a.price - b.price; // untuk mengurutkan property berdasarkan harga
  return a.name.localeCompare(b.name); // untuk mengurutkan property berdasarkan nilai name
});

console.log(sortedBikes);
