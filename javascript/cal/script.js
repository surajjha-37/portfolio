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
  output.innerHTML = sum;
}
btn1.addEventListener("click", add);

function sub() {
  let in1value = Number(in1.value);
  console.log(typeof in1value);
  let in2value = Number(in2.value);
  let sub = in1value - in2value;
  output.innerHTML = sub;
}
btn2.addEventListener("click", sub);

function mul() {
  let in1value = Number(in1.value);
  console.log(typeof in1value);
  let in2value = Number(in2.value);
  let mul = in1value * in2value;
  output.innerHTML = mul;
}
btn3.addEventListener("click", mul);

function div() {
  let in1value = Number(in1.value);
  console.log(typeof in1value);
  let in2value = Number(in2.value);
  let div = in1value / in2value;
  output.innerHTML = div;
}
btn4.addEventListener("click", div);
