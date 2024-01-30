interface ObjItem {
  item: string;
  price: number;
  time: number;
}

const clothes: ObjItem = {
  item: "clothes",
  price: 15000,
  time: 3000,
};

const pants: ObjItem = {
  item: "pants",
  price: 25000,
  time: 7000,
};

const hat: ObjItem = {
  item: "hat",
  price: 22000,
  time: 2000,
};

const shoes: ObjItem = {
  item: "shoes",
  price: 46000,
  time: 10000,
};

function buyApparel(
  money: number,
  objItem: ObjItem,
  callback: (money: number) => void
) {
  const moneyLeftover = money - objItem.price;

  setTimeout(() => {
    console.log(`saya membawa uang sebesar Rp. ${money}`);
    console.log(`saya ingin membeli ${objItem.item}`);
    console.log(`dengan harga Rp. ${objItem.price}`);
    console.log(
      `dan waktu yang dibutuhkan adalah ${objItem.time / 1000} detik\n`
    );

    callback(moneyLeftover);
  }, objItem.time);
}

buyApparel(150000, clothes, (money) => {
  buyApparel(money, pants, (money) => {
    buyApparel(money, hat, (money) => {
      buyApparel(money, shoes, (money) => {
        console.log(`sisa kembaliannya adalah Rp. ${money}`);
      });
    });
  });
});
