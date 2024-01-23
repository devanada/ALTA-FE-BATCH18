/*
Promise -> sebuah object yang merepresentasikan sebuah kejadian yang bisa terpenuhi (resolve) atau gagal (reject) yang berdasarkan pada operasi asynchronous dan bisa menghasilkan sebuah output.
*/

interface PromiseType {
  status: string;
  message: string;
}

function bentengTakeshi(name: string) {
  return new Promise<PromiseType>((resolve, reject) => {
    console.log("--- BENTENG TAKESHI DIMULAI ---");
    console.log("Doakan aku ya!!!");

    let rate = +(Math.random() * 100).toFixed(0);

    setTimeout(() => {
      console.log(rate);

      if (rate > 70) {
        resolve({
          status: "success",
          message: `Selamat ${name} anda berhasil menakhlukan benteng takeshi!`,
        });
      } else {
        reject({
          status: "failed",
          message: "Sayang sekali, anda gagal menakhlukan benteng takeshi",
        });
      }
    }, 2000);
  });
}

function playFunction() {
  let resultFromPromise = "";

  bentengTakeshi("Yamato")
    .then((result) => {
      // Then akan dijalankan ketika terpenuhi (resolve)
      resultFromPromise = result.message;
    })
    .catch((error) => {
      // Catch akan dijalankan ketika tidak terpenuhi (reject)
      resultFromPromise = error.message;
    })
    .finally(() => {
      // Finally akan dijalankan apapun kondisinya, entah dia reject ataupun resolve
      console.log("Game selesai");
    });

  console.log(resultFromPromise);
}

async function playFunction2() {
  let resultFromPromise = "";

  await bentengTakeshi("Yamato")
    .then((result) => {
      // Then akan dijalankan ketika terpenuhi (resolve)
      resultFromPromise = result.message;
    })
    .catch((error) => {
      // Catch akan dijalankan ketika tidak terpenuhi (reject)
      resultFromPromise = error.message;
    })
    .finally(() => {
      // Finally akan dijalankan apapun kondisinya, entah dia reject ataupun resolve
      console.log("Game selesai");
    });

  console.log(resultFromPromise);
}

async function playFunction3() {
  let resultFromPromise = "";

  try {
    // Try akan dijalankan ketika terpenuhi (resolve)
    let result = await bentengTakeshi("Yamato");
    resultFromPromise = result.message;
  } catch (error) {
    // Catch akan dijalankan ketika tidak terpenuhi (reject)
    resultFromPromise = (error as PromiseType).message;
  } finally {
    // Finally akan dijalankan apapun kondisinya, entah dia reject ataupun resolve
    console.log("Game selesai");
  }

  console.log(resultFromPromise);
}

playFunction3();
