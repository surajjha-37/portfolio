let input = document.querySelector("#in-1");
function adddetails() {
  let inputvalue = document.createElement("p");
  inputvalue.innerText = input.value;
  input.value = "";
  document.querySelector(".outputvalue").appendChild(inputvalue);

  if (inputvalue.innerText === "") {
    alert("Fill The Tasks!");
  } else {
    let color = document.querySelector(".outputvalue").appendChild(inputvalue);
    color.style.color = "white";
    color.style.backgroundColor = "darkgreen";
    color.style.width = "355px";
    color.style.fontWeight = "bold";
    color.style.padding = "10px";
    color.style.marginTop = "15px";
  }
}

let a = document.querySelector(".submit");
a.addEventListener("click", adddetails);
