let input = document.querySelector("#in-1");
function adddetails() {
  let inputvalue = document.createElement("p");

  input.value = "";
  document.querySelector(".outputvalue").appendChild(inputvalue);

  if (input.value === "") {
    alert("Fill The Tasks!");
    clear.innerText = "";
  } else {
    let color = document.querySelector(".outputvalue").appendChild(inputvalue);
    color.style.color = "white";
    color.style.backgroundColor = "darkgreen";
    color.style.width = "355px";
    color.style.fontWeight = "bold";
    color.style.padding = "10px";
    color.style.marginTop = "15px";
  }
  let clear = document.createElement("button");
  clear.innerText = "clear";
  let css = inputvalue.appendChild(clear);
  css.style.backgroundColor = " rgb(12, 224, 12)";
  css.style.float = "right";

  css.style.color = "white";
  css.style.fontWeight = "bold";
  css.style.height = "25px";
  css.style.borderStyle = "none";
  css.style.padding = "5px";

  function del() {
    document.querySelector(".outputvalue").innerHTML = "";
  }
  clear.addEventListener("click", del);

  function strike() {
    inputvalue.style.textDecoration = "line-through";
  }
  inputvalue.addEventListener("click", strike);
}

let a = document.querySelector(".submit");
a.addEventListener("click", adddetails);
