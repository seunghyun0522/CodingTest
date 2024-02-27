const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [car, n] = input[0].split(" ");

let ans = parseInt(car, Number(n));

console.log(ans);
