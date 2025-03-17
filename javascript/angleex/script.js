let in1 = document.querySelector("#in-1");
let btn1 = document.querySelector(".btn-1");
let output1 = document.querySelector(".output-1");
let in21 = document.querySelector("#in-21");
let in22 = document.querySelector("#in-22");
let in23 = document.querySelector("#in-23");
let btn2 = document.querySelector(".btn-2");
let output2 = document.querySelector(".output-2");

function type() {
  let in1value = Number(in1.value);
  if (in1value < 90) {
    output1.innerHTML = "Acute Angle";
    output1.classList.add("css");
  } else if (in1value > 90 && in1value < 180) {
    output1.innerHTML = "Obtuse Angle";
    output1.classList.add("css");
  } else if (in1value == 90) {
    output1.innerHTML = "Right Angle";
    output1.classList.add("css");
  } else {
    output1.innerHTML = "Invalid Angle";
    output1.classList.add("css");
  }
}

btn1.addEventListener("click", type);

// number
// = , == , ===

function sum() {
  let in21value = Number(in21.value);
  let in22value = Number(in22.value);
  let in23value = Number(in23.value);

  let abc = in21value + in22value + in23value;
  if (abc == 180) {
    output2.innerHTML = "It is forms a Triangle  =  " + abc;
    output2.classList.add("css");
  } else {
    output2.innerHTML = "It is not forms a Triangle  =  " + abc;
    output2.classList.add("css");
  }
}

btn2.addEventListener("click", sum);
