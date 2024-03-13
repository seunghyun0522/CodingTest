const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
).trim();

console.log(factorial(input));

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}
