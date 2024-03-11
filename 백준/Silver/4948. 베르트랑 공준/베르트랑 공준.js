const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let n = parseInt(input[i]);

  let [start, end] = [n, n * 2];
  let cnt = isPrime(start, end);

  console.log(cnt);
  cnt = 0;
}

function isPrime(start, end) {
  let cnt = 0;
  for (let i = start + 1; i <= end; i++) {
    if (prime(i)) cnt++;
  }
  return cnt;
}

function prime(value) {
  if (value < 2) return false;
  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) return false;
  }
  return true;
}
