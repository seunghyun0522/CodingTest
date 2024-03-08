const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let [a, b] = input[0].split(" ").map(Number);
let result = lcm(a, b);
console.log(result);
function lcm(a, b) {
  let lcm;
  let gcd;
  let m = a > b ? a : b;

  for (let i = m; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
      break;
    }
  }
  lcm = gcd * parseInt(a / gcd) * parseInt(b / gcd);

  return lcm;
}
