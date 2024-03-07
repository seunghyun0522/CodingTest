const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let arr1 = input[1].split(" ").map(Number);
let arr2 = input[3].split(" ").map(Number);
let obj2 = {};
let ans = [];
arr2.forEach((element) => {
  obj2[element] = 0;
});

arr1.forEach((element) => {
  if (obj2[element] >= 0) obj2[element]++;
});

arr2.forEach((element) => {
  ans.push(obj2[element]);
});

console.log(ans.join(" "));
