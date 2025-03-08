let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let output = document.querySelector(".output");
let value = input.value;
function check() {
  let square = input.value * input.value;
  output.innerText = "the square is =   " + square;
}
btn.addEventListener("click", check);
