let input1 = document.querySelector(".input-1");
let input2 = document.querySelector(".input-2");
let input3 = document.querySelector(".input-3");
let btnn = document.querySelector(".btn");
let output = document.querySelector(".output");

function angle() {
  let a = input1.value;
  let b = input2.value;
  let c = input3.value;

  if (a === b && b === c) {
    output.innerText = "Equilateral Triangle";
    output.classList.add("outputdiv");
  } else if (a === b || b === c) {
    output.innerText = "isosceles Triangle";
    output.innerText = "Equilateral Triangle";
  } else {
    output.innerText = "Scalene Triangle";
    output.innerText = "Equilateral Triangle";
  }
}
btnn.addEventListener("click", angle);
