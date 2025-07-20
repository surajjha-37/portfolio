import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
let input2 = document.querySelector("#in-2");
let input4 = document.querySelector("#in-4");
let input5 = document.querySelector("#in-5");
let in2out = document.querySelector(".in-2out");
let in4out = document.querySelector(".in-4out");
let in5out = document.querySelector(".in-5out");
let input1 = document.querySelector("#in-1");
let input3 = document.querySelector("#in-3");

let btn1 = document.querySelector("#btn");
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
const firebaseConfig = {
  apiKey: "AIzaSyDq2cORcalUTRli5N7AG7u5MhQUb9DOr1Q",
  authDomain: "srgcti-7d76c.firebaseapp.com",
  databaseURL: "https://srgcti-7d76c-default-rtdb.firebaseio.com",
  projectId: "srgcti-7d76c",
  storageBucket: "srgcti-7d76c.firebasestorage.app",
  messagingSenderId: "638463485936",
  appId: "1:638463485936:web:ad956e945ff4ab14f39f35",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

btn1.addEventListener("click", async () => {
  const name = input1.value.trim();
  const password = input4.value;
  const phone = input2.value;
  const email = input5.value;

  if (name === "" || isNaN(password) || phone === "" || email === "") {
    alert("Please enter valid name and age");
    return;
  }

  try {
    await addDoc(collection(db, "users"), {
      name,
      password,
      phone,
      email,
      created: new Date(),
    });
    alert("Data saved successfully!");
  } catch (error) {
    alert("Error saving data: " + error.message);
  }
}); // ✅ ye closing curly brace aur parenthesis lagaya
