const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let arr = input[0].split("").map(Number);

arr.sort((x, y) => y - x);

console.log(arr.join(""));
