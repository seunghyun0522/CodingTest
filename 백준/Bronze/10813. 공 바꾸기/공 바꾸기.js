const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//const input = fs.readFileSync("예제.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map((x) => +x);

let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(i + 1);
}

for (let i = 1; i <= M; i++) {
  let [tmp1, tmp2] = input[i].split(" ").map((x) => +x);

  [arr[tmp1 - 1], arr[tmp2 - 1]] = [arr[tmp2 - 1], arr[tmp1 - 1]];
}

console.log(arr.join(" "));
