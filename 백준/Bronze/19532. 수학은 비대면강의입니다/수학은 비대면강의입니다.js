const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

const [a, b, c, d, e, f] = input[0].split(" ").map(Number);

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) console.log(x, y);
  }
}
