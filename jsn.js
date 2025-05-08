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

const product = [
  {
    name: "laptop",
    price: 3200,
    brand: "len",
    color: "silver",
  },
  {
    name: "phone",
    price: 200,
    brand: "sam",
    color: "white",
  },
];

const newProduct = {
  name: "tab",
  price: 2000,
  brand: "sam",
  color: "black",
};

// copy products array then add newProduct

const newProducts = [...product, newProduct];

// create a new array without one specific item
// remove phone means creare a new array without phone

const remining = product.filter((p) => p.name !== "phone");
