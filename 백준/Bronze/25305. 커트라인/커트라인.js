const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

arr.sort((x, y) => y - x);

console.log(arr[k - 1]);
