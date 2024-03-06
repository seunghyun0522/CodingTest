const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let arr = [];
let sum = 0;
for (let i = 0; i < input.length; i++) {
  let value = parseInt(input[i]);
  arr.push(value);
  sum += value;
}

sum /= input.length;
arr.sort((x, y) => x - y);

console.log(sum);
console.log(arr[parseInt(input.length / 2)]);
