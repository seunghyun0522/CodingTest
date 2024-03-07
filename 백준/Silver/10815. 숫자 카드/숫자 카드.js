const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr1 = input[1].split(" ").map(Number);
const m = parseInt(input[2]);
const arr2 = input[3].split(" ").map(Number);

let ans = "";
let hash = {};
arr1.forEach((element) => {
  hash[element] = 1;
});

arr2.forEach((element) => {
  if (hash[element] === 1) ans += "1" + " ";
  else ans += "0" + " ";
});
console.log(ans);
