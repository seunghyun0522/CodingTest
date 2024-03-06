const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}

arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a > b ? 1 : -1;
});

let ans = "";
arr.forEach((element) => {
  ans += element + "\n";
});
console.log(ans);
