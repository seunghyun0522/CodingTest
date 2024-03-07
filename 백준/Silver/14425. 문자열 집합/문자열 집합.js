const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
let cnt = 0;
let arr_n = {};
let arr_m = [];
for (let i = 1; i <= n; i++) {
  arr_n[input[i]] = 1;
}

for (let i = n + 1; i <= m + n; i++) {
  if (arr_n[input[i]] === 1) cnt++;
}

console.log(cnt);
