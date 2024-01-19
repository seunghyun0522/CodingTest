const fs = require("fs");
const [n, INPUT] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = INPUT.split(" ").map(Number);

let now_turn = 1;

let stack = [];
for (let st of input) {
  stack.push(st);
  while (stack.length>0 && stack[stack.length - 1] == now_turn) {
    stack.pop();
    now_turn++;
  }
}
if (stack.length > 0) console.log("Sad");
else console.log("Nice");
