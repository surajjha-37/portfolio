let input2 = document.querySelector("#in-2");
let input4 = document.querySelector("#in-4");
let input5 = document.querySelector("#in-5");
let in2out = document.querySelector(".in-2out");
let in4out = document.querySelector(".in-4out");
let in5out = document.querySelector(".in-5out");
let btn1 = document.querySelector(".btn");
function valid() {
  let input2value = input2.value;
  let input4value = input4.value;
  let input5value = input5.value;
  let regex1 = /^\d{10}$/;
  if (regex1.test(input2value)) {
    in2out.innerText = "";
  } else {
    in2out.innerText = "Invalid Number";
    in2out.style.color = "red";
  }
  let regex2 = /^(?=.*[!@#$%^&*]).{6,}$/;
  if (regex2.test(input4value)) {
    in4out.innerText = "";
  } else {
    in4out.innerText = "Please make strong Passsword";
    in4out.style.color = "red";
  }
}
btn1.addEventListener("click", valid);
