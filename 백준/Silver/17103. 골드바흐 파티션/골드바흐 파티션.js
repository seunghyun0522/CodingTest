const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const MAX = Math.max(...input); // 입력 값 중 최대값

let prime = Array(MAX + 1).fill(true);

prime[0] = prime[1] = false;

for (let i = 2; i * i <= MAX; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      prime[j] = false;
    }
  }
}

input.forEach((element) => {
  let cnt = 0;
  for (let i = 2; i <= element / 2; i++) {
    if (prime[i] && prime[element - i]) {
      cnt++;
    }
  }
  console.log(cnt);
});
