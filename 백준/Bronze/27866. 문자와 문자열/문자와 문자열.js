const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//const input = fs.readFileSync("예제.txt").toString().split("\n");
let str = input[0];
let num = Number(input[1]);

console.log(str.charAt(num - 1));
