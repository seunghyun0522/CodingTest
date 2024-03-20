const { count } = require("console");

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let n = parseInt(input[0]);
let sum = factorial(n);
function factorial(n) {
  if (n < 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(sum);
