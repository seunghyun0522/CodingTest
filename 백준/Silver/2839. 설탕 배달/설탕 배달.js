const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n")
  .map(Number);

let n = input[0];

let cnt = 0;

while (n > 0) {
  if (n % 5 === 0) n -= 5;
  else n -= 3;
  cnt++;
}

if (n === 0) console.log(cnt);
else console.log(-1);
