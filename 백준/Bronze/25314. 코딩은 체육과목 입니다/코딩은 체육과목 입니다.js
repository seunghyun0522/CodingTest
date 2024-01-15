const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString();
//const input = fs.readFileSync("예제.txt").toString();
let num = Number(input);
let count = num / 4;

let result = "";
for (let i = 1; i <= count; i++) {
  result += "long ";
}
console.log(result + "int");
