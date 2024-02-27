
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function createArray(rows, cols, initialValue) {
  var arr = [];
  for (var i = 0; i < rows; i++) {
    arr[i] = [];
    for (var j = 0; j < cols; j++) {
      arr[i][j] = initialValue;
    }
  }
  return arr;
}

var array = createArray(100, 100, 0);
for (let i = 1; i < input.length; i++) {
  let [w, h] = input[i].split(" ").map(Number);
  for (let wi = w; wi < w + 10; wi++) {
    for (let he = h; he < h + 10; he++) {
      array[wi][he] = 1;
    }
  }
}

let sum = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (array[i][j] === 1) sum++;
  }
}

console.log(sum);
