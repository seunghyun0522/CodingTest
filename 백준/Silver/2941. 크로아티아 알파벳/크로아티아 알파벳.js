const fs = require("fs");

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str = input[0];
let cro = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i of cro) {
  str = str.replaceAll(i, "x");
}
console.log(str.length);
