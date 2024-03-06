const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let n = parseInt(input[0]);

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(parseInt(input[i]));
}

arr.sort((x, y) => x - y);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
