const fs = require("fs");
//const [n, ...arr] = fs.readFileSync("예제.txt").toString().trim().split("\n");
 const [n,...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += isGroup(arr[i]);
}
console.log(sum);

function isGroup(str) {
  let compressed = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let nextChar = str[i + 1];

    compressed += currentChar;

    while (currentChar === nextChar) {
      i++;
      nextChar = str[i + 1];
    }
  }

  const set = new Set(compressed);
  if (set.size === compressed.length) return 1;
  else return 0;
}
