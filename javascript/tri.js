let triinput = document.querySelector(".ctri");
let output2 = document.querySelector(".output-2");
let btn2 = document.querySelector(".btn-2");
function trif() {
  let inputvalue2 = triinput.value;

  let text2 = document.querySelector(".output-2");
  if (inputvalue2 === "sinx") {
    text2.innerText = "1/Cosecx";

    text2.style.marginTop = "15px";
    text2.style.color = "#00246B";
    text2.style.backgroundColor = "rgb(9, 249, 229)";
    text2.style.padding = "5px";
    text2.style.borderRadius = "5px";
    text2.style.textAlign = "center";
    text2.style.fontWeight = "bold";
  }
  if (inputvalue2 === "cosx") {
    text2.innerText = "1/Secx";
  }
  if (inputvalue2 === "tanx") {
    text2.innerText = "Sinx/Cosx";
  }
  if (inputvalue2 === "cotx") {
    text2.innerText = "Cosx/Sinx";
  }
  if (inputvalue2 === "cosecx") {
    text2.innerText = "1/Sinx";
  }
  if (inputvalue2 === "Secx") {
    text2.innerText = "1/Cosx";
  }
}
btn2.addEventListener("click", trif);
