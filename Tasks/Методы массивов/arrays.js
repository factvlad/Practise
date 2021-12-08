let products = [
  {
    id: 1,
    name: "Apple",
    isFruit: true,
    count: 3,
  },
  {
    id: 2,
    name: "Egg",
    isFruit: false,
    count: 4,
  },
  {
    id: 3,
    name: "Orange",
    isFruit: true,
    count: 9,
  },
  {
    id: 4,
    name: "Carrot",
    isFruit: false,
    count: 1,
  },
];

// Найдите первый продукт, имя которого состоит из 5 символов
// { id: 1, name: "Apple", isFruit: true, count: 3 }

let firstArr = products.find((item) => item.name.length == 5);
console.log(firstArr);

// let firstArr = products.filter((item) => {
//   if (item.name.length == 5) return true;
// });
// console.log(firstArr);

// let fruits = [];
// products.forEach(function (item) {
//   if (item.name.length == 5) fruits.push(item);
// });
// console.log(fruits);

// let fruits = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].name.length == 5) fruits.push(products[i]);
// }
// console.log(fruits);

// Верните массив из айдишников всех продуктов
// [1, 2, 3, 4]

let idArr = products.map((item) => item.id);
console.log(idArr);

// Найдите те продукты, которые являются фруктами и верните массив объектов с их именем
// [{ name: "Apple" }, { name: "Orange" }

// let fruitArrs = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].isFruit) {
//     fruitArrs.push(products[i]);
//   }
// }
// console.log(fruitArrs);

// Бессмертная классика

// const fruitArr = products.filter((item) => {
//   if (item.isFruit) {
//     return true;
//   }
// });
// console.log(fruitArr);

// const newArr = fruitArr.map((index) => {
//   return index.name;
// });
// console.log(newArr);

// Это моя пародия на Рекурсию , не понял как их можно соеденить в один массив

var arrFruct = products.reduce(function (newArr, fruts) {
  if (fruts.isFruit) {
    newArr.push(fruts.name);
  }
  return newArr;
}, []);

console.log(arrFruct);

// С помошью гуглка смог решить, но не особо понял ход выполнения
