const { count } = require("console");

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let callCount = 0;
input.shift();

input.forEach((element) => {
  let r = isPalindrome(element);
  console.log(r, callCount);
});

function isPalindrome(str) {
  return recursion(str, 0, str.length - 1);
}

function recursion(str, l, r) {
  if (l === 0) callCount = 0;
  callCount++;
  if (l >= r) return 1;
  else if (str[l] !== str[r]) return 0;
  else return recursion(str, l + 1, r - 1);
}
