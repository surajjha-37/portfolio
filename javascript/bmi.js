let a = document.querySelector("#in-1");
let b = document.querySelector("#in-2");
let output = document.querySelector(".output");
let btn = document.querySelector(".btn");
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
let main = document.querySelector(".main");
let heading = document.querySelector("h3");
function bmi() {
  confetti();
  let abc = a.value;
  let kbc = b.value;
  let kfc = abc / (kbc * kbc);
  kfc = kfc.toFixed(2);
  output.innerHTML = kfc;
  output.style.backgroundColor = "rgb(38, 37, 37)";
  output.style.color = "white";

  if (kfc < 18.5) {
    output.innerHTML = "Underweight      " + kfc;
  } else if (kfc >= 18.5 && kfc <= 24.9) {
    output.innerHTML = "Normal Weight   " + kfc;
  } else if (kfc >= 25 && kfc <= 29.9) {
    output.innerHTML = "Overweight   " + kfc;
  } else {
    output.innerHTML = "Obese     " + kfc;
  }
}
btn.addEventListener("click", bmi);
function darkk() {
  main.style.backgroundColor = "black";
  btn.style.backgroundColor = "White";
  btn.style.color = "black";
  dark.style.backgroundColor = "White";
  dark.style.color = "black";
  light.style.backgroundColor = "White";
  light.style.color = "black";
  heading.style.color = "white";
  a.style.border = "2px solid white";
  b.style.border = "2px solid white";
  a.style.backgroundColor = "rgb(38, 37, 37)";
  b.style.backgroundColor = "rgb(38, 37, 37)";
  a.style.color = "white";
  b.style.color = "white";
}
dark.addEventListener("click", darkk);

function lightt() {
  main.style.backgroundColor = "white";
  btn.style.backgroundColor = "black";
  btn.style.color = "white";
  dark.style.color = "white";
  dark.style.backgroundColor = "black";
  light.style.color = "white";
  heading.style.color = "black";
  light.style.backgroundColor = "black";
  a.style.backgroundColor = "white";
  b.style.backgroundColor = "white";
  a.style.border = "2px solid black";
  b.style.border = "2px solid black";
  a.style.color = "black";
  b.style.color = "black";
}
light.addEventListener("click", lightt);
