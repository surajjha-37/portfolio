function cleara() {
  document.querySelector(".item-1");
  document.querySelector(".item-1").innerHTML = "";
}
let a = document.querySelector(".clear-1");
a.addEventListener("click", cleara);

function clearb() {
  document.querySelector(".item-2");
  document.querySelector(".item-2").innerHTML = "<strike>Devansh</strike>";
}
let b = document.querySelector(".clear-2");
b.addEventListener("click", clearb);

function clearc() {
  document.querySelector(".item-3");
  document.querySelector(".item-3").innerHTML = "";
}
let c = document.querySelector(".clear-3");
c.addEventListener("click", clearc);

function cleard() {
  document.querySelector(".item-4");
  document.querySelector(".item-4").innerHTML = "";
}
let d = document.querySelector(".clear-4");
d.addEventListener("click", cleard);

function cleare() {
  document.querySelector(".item-5");
  document.querySelector(".item-5").innerHTML = "";
}
let e = document.querySelector(".clear-5");
e.addEventListener("click", cleare);
