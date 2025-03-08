let areainput = document.querySelector(".area-1");
let areainputt = document.querySelector(".area-2");
let output = document.querySelector(".output-1");

let btn = document.querySelector(".btn-1");

function area() {
  let inputvalue = areainput.value;
  let inputtvalue = areainputt.value;
  let text = document.querySelector(".output-1");
  text.innerHTML =
    "Area of Triangle is =     " +
    (inputvalue * inputtvalue) / 2 +
    "       unit <sup>2</sup>";
  text.style.marginTop = "15px";
  text.style.width = "350px";
  text.style.height = "35px";
  text.style.textAlign = "center";
  text.style.color = "black";
  text.style.padding = "5px";
  text.style.fontWeight = "bold";
  text.style.backgroundColor = "white";

  text.style.borderRadius = "5px";
}
btn.addEventListener("click", area);
