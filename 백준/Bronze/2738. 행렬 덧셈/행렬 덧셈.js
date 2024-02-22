
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = Number(input[0].trim().split(" ")[0]);
let M = Number(input[0].trim().split(" ")[1]);
let A = [];
let B = [];
let result = "";
let arr;
let miniArr;
for (let i = 1; i <= N; i++) {
  arr = input[i].trim().split(" ");
  miniArr = [];

  for (let j = 0; j < M; j++) {
    miniArr.push(arr[j]);
  }
  A.push(miniArr);
}

for (let i = N + 1; i < input.length; i++) {
  arr = input[i].trim().split(" ");
  miniArr = [];

  for (let j = 0; j < M; j++) {
    miniArr.push(arr[j]);
  }
  B.push(miniArr);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result += Number(A[i][j]) + Number(B[i][j]) + " ";
  }
  result += "\n";
}

console.log(result);