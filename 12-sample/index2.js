var p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p1 complete !");
  }, Math.random() * 3000);
});

var p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p2 complete !");
  }, Math.random() * 3000);
});

Promise.race([p1, p2]).then((value) => {
  // Promise.all([p1, p2]).then((value) => {
  console.log(value);
}, (reason) => {
  console.log(reasom);
});