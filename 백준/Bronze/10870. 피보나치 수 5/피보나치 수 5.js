const { count } = require("console");

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let n = parseInt(input[0]);

let re = fib(n);
function fib(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fib(n - 1) + fib(n - 2);
}

console.log(re);
