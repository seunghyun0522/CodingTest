const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");
const n = parseInt(input);

var result = 0;

for (i = 1; i * i <= n; i++) {
  result++;
}

console.log(result);
