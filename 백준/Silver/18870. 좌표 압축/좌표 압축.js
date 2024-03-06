const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let arr = input[1].split(" ").map(Number);
let arr1 = [...arr];

let obj = {};
let set = [...new Set(arr1.sort((a, b) => a - b))];

set.forEach((item, idx) => {
  obj[item] = idx;
});

let ans = [];

arr.forEach((element) => {
  ans.push(obj[element]);
});
console.log(ans.join(" "));
