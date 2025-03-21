let input = document.querySelector("#valueid");
let celcius = document.querySelector(".c");
let kelvin = document.querySelector(".k");
let result = document.querySelector(".result");

function convertc() {
  let a = input.value;

  result.innerText = a - 273.15;

  console.log("Hello SRG");
}
celcius.addEventListener("click", convertc);

function convertk() {
  let b = parseFloat(input.value);

  result.innerText = b + 273.15;

  console.log("Hello SRG");
}
kelvin.addEventListener("click", convertk);
