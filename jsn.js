// 1. JSON => stringyfy , pharse

const student = {
  name: "sany",
  age: 21,
  movies: ["King", "queen", "slave"],
};

const studentJson = JSON.stringify(student);
// console.log(student)
// consol.log(studentJSON)

const studentObj = JSON.parse(studentObj);
// consol.log(studentObj);

// 2. fetch
fetch("url")
  .then((res) => res.JSON)
  .then((data) => console.log(data));

//keys,values

const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [12, 34, 56, 78];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

// for of on array like object
// loop on an object using for in on object

// add or remove from an array

const product = {};
