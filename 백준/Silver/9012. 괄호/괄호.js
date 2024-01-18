const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//const input = fs.readFileSync("예제.txt").toString().trim().split("\n");
const [n, ...arr] = input;


for (let i = 0; i < n; i++) {
  let str = String(arr[i].split(" "));

  let result = vps(str);
  console.log(result);
}

function vps(str) {
  let stack = 0;
  for (let value of str) {
    if (value === "(") stack++;
    else stack--;
    if (stack < 0) return "NO";
  }
  return stack === 0 ? "YES" : "NO";
}
