// 1. how to declare a variable using let and const

const fatherName = "arnold";
let season = "rainy";
season = "winter";

// 2.Condition basic

// 6 basic conditions : >,<,===,!==,<=,>=
// multiple condition : && , ||

if (fatherName === "arnold" || season === "winter") {
} else if (season === "rainy") {
}

// 3. Array declear
// array index , length

const number = [2, 3, 4, 5];
number[0] = 7;

// 4. Loop
for (let i = 0; i < number.length; i++) {
  const numbers = number[i];
  console.log(numbers);
}

// 5.Function
function mult(num1, num2) {
  const res = num1 * num2;
  return res;
}

const out = mult(35, 78);

// 6.Object
// 3 ways to access property by name

const student = {
  name: "sany",
  age: 32,
  movies: ["life", "survive"],
};

const myv = "age";

console.log(student.age); //direct by property
console.log(student["age"]); //access via property name

console.log(student[myv]); //access via property name from a variable
