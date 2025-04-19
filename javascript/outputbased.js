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
fetch(
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c54dacb95631330e657284be2723541d&page=1"
)
  .then((response) => response.json())
  .then((data) => {
    let div = document.querySelector(".user");
    div.innerHTML = "suraj";
  })
  .catch((error) => console.log(error));
