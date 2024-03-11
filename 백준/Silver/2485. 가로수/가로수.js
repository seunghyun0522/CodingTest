const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let n = parseInt(input[0]);
let arr = [];
for (let i = 1; i < n; i++) {
  arr.push(Math.abs(parseInt(input[i]) - parseInt(input[i + 1])));
}

// console.log(arr);
let gcdValue = 0;
arr.forEach((element) => {
  gcdValue = gcd(gcdValue, element);
});

let sum = 0;
arr.forEach((element) => {
  sum += element / gcdValue - 1;
});
console.log(sum);


function gcd(a, b) {
  if (a < b) {
    [a, b] = [b, a];
  }

  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
