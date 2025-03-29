for (let i = 0; i < 10; i++) {
  function loop() {
    console.log(i);
  }
  setTimeout(loop, i * 1000);
}
