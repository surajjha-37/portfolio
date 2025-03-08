let array = [1, 2, 3, 5];
let array2 = [1, 3, 4, 5];
for (let i = 0; i < 4; i++) {
  console.log(array[i]);
  if (array === array2) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
}
