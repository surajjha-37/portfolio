let a = document.querySelector(".text");
let b = document.querySelector(".button");
let count = 0;

function countadd() {
  count++;
  a.innerText = count;
}
b.addEventListener("click", countadd);
