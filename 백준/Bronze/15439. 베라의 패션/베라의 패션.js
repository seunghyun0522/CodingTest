const fs = require("fs");
//const n = fs.readFileSync("예제.txt").toString().trim().split("\n").map(Number);
const n = fs.readFileSync("dev/stdin").toString();

///dev/stdin

console.log(n * (n - 1));
