let input = document.querySelector(".in-1");
let btn = document.querySelector(".btn");
let output = document.querySelector(".output");

function palin() {
  confetti();
  let invalue = input.value;
  let lower = invalue.toLowerCase();
  let reversed = lower.split("").reverse().join("");
  output.classList.add("css");
  if (invalue === reversed) {
    output.innerHTML = "Yes, Your Name is Palindrome";
  } else {
    output.innerHTML = "No, Your Name is not Palindrome";
  }
}
btn.addEventListener("click", palin);
