const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//const input = fs.readFileSync("예제.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map((x) => +x);

let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(i + 1);
}

for (let i = 1; i <= M; i++) {
  let [startIdx, endIdx] = input[i].split(" ").map((x) => +(x - 1));

  let reversedSubArray = arr.slice(startIdx, endIdx + 1).reverse();
  let newArr = [
    ...arr.slice(0, startIdx),
    ...reversedSubArray,
    ...arr.slice(endIdx + 1),
  ];

  arr = newArr;
}

console.log(arr.join(" "));
