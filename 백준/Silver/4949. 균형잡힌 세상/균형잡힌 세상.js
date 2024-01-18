const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("예제.txt").toString().trim().split("\n");
let ans = [];
let i = 0;
while (input[i] !== ".") {
  let flag = vps(input[i]);
  if (flag && input[i].charAt(input[i].length - 1) === ".") ans.push("yes");
  else ans.push("no");
  i++;
}

console.log(ans.join("\n"));

function vps(str) {
  let stack = [];
  for (let value of str) {
    if (value === "[" || value === "(") stack.push(value);
    else if (value === "]")
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else return false;
    else if (value === ")")
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else return false;

    if (stack.length < 0) return false;
  }
  return stack.length === 0 ? true : false;
}
