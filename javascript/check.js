let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let output = document.querySelector(".output");
function check() {
  let value = input.value;
  if (value === "") {
    alert("Enter the value.");
  }

  if (value % 2 === 0) {
    output.innerText = "It is even number.";
  } else {
    output.innerText = "It is odd Number.";
  }
}
btn.addEventListener("click", check);
