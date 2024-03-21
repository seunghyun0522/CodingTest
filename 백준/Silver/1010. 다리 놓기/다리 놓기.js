const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

input.shift();

input.forEach((element) => {
  let [a, b] = element.split(" ");
  let re = solution(b, a);
  console.log(re);
});

function solution(n, r) {
  return Math.round(fac(n) / (fac(r) * fac(n - r)));
}

function fac(x) {
  if (x <= 1) return 1;
  else return x * fac(x - 1);
}
