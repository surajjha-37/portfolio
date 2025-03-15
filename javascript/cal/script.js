let in1 = document.querySelector("#in-1");
let in2 = document.querySelector("#in-2");
let outputdiv = document.querySelector(".outputdiv");
let output = document.querySelector(".output");
let btn1 = document.querySelector(".add");
let btn2 = document.querySelector(".sub");
let btn3 = document.querySelector(".mul");
let btn4 = document.querySelector(".div");

function add() {
  let in1value = Number(in1.value);
  console.log(typeof in1value);
  let in2value = Number(in2.value);
  let sum = in1value + in2value;
  output.innerHTML = "The sum of two no. is   =   " + sum;
  output.classList.add("css");
  outputdiv.classList.add("cssdiv");
  confetti();
}
btn1.addEventListener("click", add);

function sub() {
  let in1value = Number(in1.value);
  console.log(typeof in1value);
  let in2value = Number(in2.value);
  let sub = in1value - in2value;
  output.innerHTML = "The difference of two no. is   =   " + sub;
  output.classList.add("css");
  outputdiv.classList.add("cssdiv");
  confetti();
}
btn2.addEventListener("click", sub);

function mul() {
  let in1value = Number(in1.value);
  console.log(typeof in1value);
  let in2value = Number(in2.value);
  let mul = in1value * in2value;
  output.innerHTML = "The multiple of two no. is   =   " + mul;
  output.classList.add("css");
  outputdiv.classList.add("cssdiv");
  confetti();
}
btn3.addEventListener("click", mul);

function div() {
  let in1value = Number(in1.value);
  console.log(typeof in1value);
  let in2value = Number(in2.value);
  let div = in1value / in2value;
  output.innerHTML = "The divide of two no. is   =   " + div;
  output.classList.add("css");
  outputdiv.classList.add("cssdiv");
  confetti();
}
btn4.addEventListener("click", div);

let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let outputdiv2 = document.querySelector(".outputdiv2");
let output2 = document.querySelector(".output2");
let in3 = document.querySelector("#in-3");

function convert() {
  let in3value = in3.value;
  output2.innerHTML = in3value * 100 + "   cm";
  output2.classList.add("css");
  outputdiv2.classList.add("cssdiv");
  confetti();
}
btn5.addEventListener("click", convert);

function convert2() {
  let in3value = in3.value;
  output2.innerHTML = in3value / 100 + "  m";
  output2.classList.add("css");
  outputdiv2.classList.add("cssdiv");
  confetti();
}
btn6.addEventListener("click", convert2);
