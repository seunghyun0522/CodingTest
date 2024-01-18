const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("예제.txt").toString().trim().split("\n");
const [n, ...arr] = input;

const stack = [];
const result = [];
for (let i = 0; i < arr.length; i++) {
  let query = arr[i];
  const [cmd, value] = query.split(" ");
  switch (cmd) {
    case "1":
      stack.push(parseInt(value));
      break;
    case "2":
      if (stack.length > 0) result.push(stack.pop());
      else result.push(-1);
      break;
    case "3":
      result.push(stack.length);
      break;
    case "4":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "5":
      if (stack.length > 0) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }
      break;
    default:
      break;
  }
}

console.log(result.join("\n"));
