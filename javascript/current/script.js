// recursion;

// function factorial(n) {
//   if (n === 1 || n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(7));

// callback
// function showmessage(message, callback) {
//   console.log(message);
//   callback();
// }
// function saygoodbye() {
//   console.log("goodbye");
// }

// function saythanks() {
//   console.log("thanks");
// }

// showmessage("hello world", saygoodbye);
// showmessage("hello world", saythanks);

// let promise = new Promise(function (resolve) {
//   setTimeout(() => {
//     resolve(2);
//   }, 3000);
// });

// promise
//   .then(function (result) {
//     return result + 2;
//   })
//   .then(function (resultt) {
//     console.log(resultt + 2);
//   });

// Qu-4
// function FetchUserData() {
//   let promise = new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve("User data Loaded");
//     }, 1500);
//   });

//   promise.then(function (result) {
//     return console.log(result);
//   });
// }
// FetchUserData();

// Qu-2
// let promise = new Promise(function (callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 1000);
// }).then(function (result) {
//   console.log(result);
// });

// Qu-5
// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "John" });
//     }, 2500);
//   }).then((data) => {
//     console.log(data.id);
//     console.log(data.name);
//   });
// }
// getData();

// Qu-6

// let promise = new Promise(function (resolve) {
//   resolve(2);
// })
//   .then((data) => {
//     return data + 5;
//   })
//   .then((data) => {
//     console.log(data * 2);
//   });

// Fetch API

let btn = document.querySelector(".find");

function api() {
  let div = document.querySelector(".movie-container");
  let div2 = document.querySelector(".movie-container2");
  let div3 = document.querySelector(".movie-container3");
  let div4 = document.querySelector(".movie-container4");
  div.innerHTML = "loading...";
  div2.innerHTML = "loading...";
  div3.innerHTML = "loading...";
  div4.innerHTML = "loading...";
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=28.6654&longitude=77.4391&current=temperature_2m,precipitation,rain,wind_speed_10m,relative_humidity_2m,is_day&timezone=auto"
  )
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        let movies = data.current.time;
        let movies2 = data.current.temperature_2m + "  °C";
        let movies3 = data.current.wind_speed_10m;
        let movies4 = data.current.relative_humidity_2m;
        div.classList.add("style");
        div2.classList.add("style");
        div3.classList.add("style");
        div4.classList.add("style");
        div.innerHTML = movies;
        div2.innerHTML = movies2;
        div3.innerHTML = movies3;
        div4.innerHTML = movies4;
      }, 1000);
    })

    .catch((error) => console.log("Error:", error));
}
btn.addEventListener("click", api);
