const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

input.shift();
let result = [];
for (i of input) {
  while (!prime(i)) {
    i++;
  }
  result.push(i);
}
console.log(result.join("\n"));

function prime(value) {
  if (value < 2) return false;
  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) return false;
  }
  return true;
}
