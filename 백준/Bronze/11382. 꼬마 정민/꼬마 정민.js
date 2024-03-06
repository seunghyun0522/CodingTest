const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let arr = input[0].split(" ").map(Number);

let sum = 0;
arr.forEach((element) => {
  sum += element;
});

console.log(sum);
