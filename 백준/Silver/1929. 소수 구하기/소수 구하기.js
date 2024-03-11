const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let [start, end] = input[0].split(" ").map(Number);

for (let i = start; i <= end; i++) {
  if (prime(i)) console.log(i);
}
function prime(value) {
  if (value < 2) return false;
  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) return false;
  }
  return true;
}
