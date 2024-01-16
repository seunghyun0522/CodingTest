const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//const input = fs.readFileSync("예제.txt").toString().split("\n");
let num = input[0];

for (let i = 1; i <= num; i++) {
  let str = String(input[i].split(" ").map((x) => x));
  console.log(str.charAt(0) + str.charAt(str.length - 1));
}
