// 1
let person = {
  id: 1,
  name: "Nicholas",
  getInfo() {
    let personID = () => {
      console.log(this.id, this.name);
    };
    personID();

    let upperName = function (x, y) {
      console.log(this.name?.toUpperCase()); // this.name && this.name.toUpperCase() - ?
      console.log(x, y);
    };
    const arr = [1, 2];

    upperName.apply(this, arr);
    upperName.call(this, ...arr);

    return `id: ${this.id}, name: ${this.name}`;
  },
};

console.log(person.getInfo());

function someS() {
  console.log(this);
}
someS();

console.log(this);

let person2 = {
  id: 12,
  name: "Jack",
};

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

class Person {
  constructor(name) {
    this.name = name;
  }
}

let person = new Person("Nicholas");
let notAPerson = Person("Nicholas");

console.log(person);
console.log(notAPerson);
