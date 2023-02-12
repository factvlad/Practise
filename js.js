// 1
// let person = {
//   id: 1,
//   name: "Nicholas",
//   getInfo() {
//     let personID = () => {
//       console.log(this.id, this.name);
//     };
//     personID();

//     let upperName = function (x, y) {
//       console.log(this.name?.toUpperCase()); // this.name && this.name.toUpperCase() - ?
//       console.log(x, y);
//     };
//     const arr = [1, 2];

//     upperName.apply(this, arr);
//     upperName.call(this, ...arr);

//     return `id: ${this.id}, name: ${this.name}`;
//   },
// };

// console.log(person.getInfo());

// function someS() {
//   console.log(this);
// }
// someS();

// console.log(this);

// let person2 = {
//   id: 12,
//   name: "Jack",
// };

// function sume(...args) {
//   console.log(args.reduce((a, b) => a + b));
// }
// sume(1, 2, 3, 1);

// let newMethod = person.getInfo.bind(person2);
// console.log(newMethod());

// 2
// function Person(name) {
//   // new - создание пустого обьекта this = {}
//   this.name = name; // {name:}
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let person = new Person("Nicholas");
// let notAPerson = Person("Nicholas");

// (function () {
//   let count = 2
//   let i = count * 2 * 2
//   return i + count
// }
// )()

// function test() {
//   let count = 2
//   let i = count * 2 * 2
//   return i + count
// }
// console.log(test())


// const test10 = function () {
//   gg = 110
//   return gg + 12
// }
// console.log(test10())




// const test22 = (ggg = 10) => ggg + 11
// console.log(test22())


// const Cities = {
//   Odessa: 2,
//   Kiev: 10,
//   Kharkov: 3,
//   BigVillge: {
//     Hg: 100,
//     Gf: 50,
//     Kf: 1,
//   },
//   Sum: function () {
//     console.log("zalupa")
//   }
// }
// const info = [{ ...Cities, ...Array1 }]
// console.log(info)

// const newarr = info.map((item, index) => (item))
// console.log(newarr.concat(Array1))




// const ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились.") },
//   () => { alert("Вы отменили выполнение.") }
// );

// const user = {
//   name: 'Bob',
//   funcFunc() {
//     return function() {
//       console.log(this);
//     }
//   },
//   funcArrow() {
//     return () => {
//       console.log(this);
//     }
//   },
//   arrowFunc: () => {
//     return function() {
//       console.log(this);
//     }
//   },
//   arrowArrow: () => {
//     return () => {
//       console.log(this);
//     }
//   },
// };

// user.funcFunc()(); // ?
// user.funcArrow()(); // ?
// user.arrowFunc()(); // ?
// user.arrowArrow()(); // ?


// Объект user остался без изменений
// const user = {
//   name: 'Bob',
//   funcFunc() {
//     return function() {
//       console.log(this);
//     }
//   },
//   funcArrow() {
//     return () => {
//       console.log(this);
//     }
//   },
//   arrowFunc: () => {
//     return function() {
//       console.log(this);
//     }
//   },
//   arrowArrow: () => {
//     return () => {
//       console.log(this);
//     }
//   },
// };

// const user2 = {
//   name: 'Jim',
//   funcFunc: user.funcFunc(),
//   funcArrow: user.funcArrow(),
//   arrowFunc: user.arrowFunc(),
//   arrowArrow: user.arrowArrow()
// }

// user2.funcFunc(); // ?
// user2.funcArrow(); // ?
// user2.arrowFunc(); // ?
// user2.arrowArrow(); // ?

// function t12(e) {
//     const button = document.querySelector(".btn")
//     const { textContent } = this
//     console.log(this)
// }


// document.querySelector(".btn").onclick = t12;





// function getSubscriptionPrice(type) {
//     let price;


//     switch (type) {
//         case "starter":
//             price = 0
//             break;

//         case "professional":
//             price = 20
//             break;

//         case "organization":
//             price = 50
//             break;
//     }

//     // Change code above this line
//     return price;
// }

// function getShippingCost(country) {
//     let message;
//     let price;
//     switch (country) {
//         case "China":
//             price = 100
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         case "Chile":
//             price = 250
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         case "Australia":
//             price = 170
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         case "Jamaica":
//             price = 120
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         default:
//             message = "Sorry, there is no delivery to your country"
//     }
//     return message;
// }

// console.log(getShippingCost("Australia"))

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// console.log(courseTopic.length + 1)
// const lastElement = courseTopic[courseTopic.length - 1]
// console.log(lastElement)


// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },

//     addPotion(newPotion) {
//         for (const item of this.potions) {

//             if (item.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         const newProduct = {
//             ...newPotion,
//         };



//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const potion = this.potions[i];
//             if (potionName === potion.name) {
//                 this.potions.splice(i, 1);
//             }
//         }
//     },
//     updatePotionName(oldName, newName) {
//         let resalt = `Potion ${oldName} is not in inventory`;
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const potion = this.potions[i];

//             if (oldName === potion.name) {
//                 potion.name = newName;
//                 resalt = `Found ${oldName} change to ${newName} `;
//             }
//         }
//         return console.log(resalt);
//     },
// };



// const planetsLengths = planets.map((element) => {
//     return element.length
// })

// const titles = books.map(element => element.title)


// Change code below this line


const nums = [4, 3, 2, 7, 8, 2, 3, 1, 1, 1, 1, 1, 1]


// const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)


// console.log(findDuplicates(nums))

function repeatFilter(arr) {
    const newArr = arr.filter((item, index) => arr.indexOf(item) !== index)
    return [...new Set(newArr)]
}

function findDuplicates(arr) {
    const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
    return [...new Set(filtered)]
}