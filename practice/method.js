// const numbers = [
//   { name: "Devansh", marks: 75 },
//   { name: "Kajal", marks: 29 },
//   { name: "Naitik", marks: 55 },
//   { name: "Sunita", marks: 25 },
//   { name: "Suraj", marks: 85 },
// ];

// const students = numbers
//   .filter((num) => num.marks >= 33)
//   .map((num2) => "congrats   " + num2.name);

// console.log(students);
// console.log(a);
// var a = "abhishek";

// var is a function-scope , we can access it inside the function not in outside the function.
// we can do redeclare the value of variable.we can do ressign the value of variable .

// let is a function-scope & Block-scope , we can access it inside the function or block  not from outside the function or block.
// we can't do redeclare the value of variable.But we can do ressign the value of variable .

// Const is a function-scope & Block-scope , we can access it inside the function or block  not from outside the function or block.
// we can't do redeclare the value of variable.But we can do ressign the value of variable .

let array = ["   abhishek", " ", "suraj"];
for (let i = 0; i < array.length; i++) {
  if (array[i] === " ") {
    continue;
  } else {
    console.log(array[i]);
    console.log(array[i].trim());
  }
}
