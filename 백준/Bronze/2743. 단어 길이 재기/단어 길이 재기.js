const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//const input = fs.readFileSync("예제.txt").toString().split("\n");
let str = input[0];

console.log(str.length);
