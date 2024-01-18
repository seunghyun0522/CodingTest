const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("예제.txt").toString().trim().split("\n");
const [n, ...arr] = input;

const stack = [];
for (let i = 0; i < n; i++) {
  let value = parseInt(arr[i].split(" "));

  if (value !== 0) stack.push(value);
  else stack.pop();
}

let sum = stack.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);