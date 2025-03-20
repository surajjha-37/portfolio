let out = document.querySelector(".output");
let in1 = document.querySelector(".in");
let btn = document.querySelector(".btn");
let sel = document.querySelector("#select");
function select() {
  confetti();
  let in1value = Number(in1.value);
  let selectvalue = sel.value;

  if (selectvalue === "USD") {
    let final1 = in1value * 86.33;
    out.innerHTML = final1 + "  INR";
    out.classList.add("css");
  } else if (selectvalue === "UAED") {
    let final2 = in1value * 23.51;
    out.innerHTML = final2 + "  INR";
  } else if (selectvalue === "AD") {
    let final3 = in1value * 54.29;
    out.innerHTML = final3 + "  INR";
  } else if (selectvalue === "GBP") {
    let final4 = in1value * 112.977;
    out.innerHTML = final4 + "  INR";
  } else if (selectvalue === "Euro") {
    let final5 = in1value * 93.61;
    out.innerHTML = final5 + "  INR";
  }
}
btn.addEventListener("click", select);
