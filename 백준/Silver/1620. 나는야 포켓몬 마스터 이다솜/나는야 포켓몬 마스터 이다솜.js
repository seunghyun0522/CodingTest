const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
// 번호를 키로, 이름을 값으로 갖는 객체
const numberToName = {};
// 이름을 키로, 번호를 값으로 갖는 객체
const nameToNumber = {};

for (let i = 0; i < n; i++) {
  const name = input[i];
  const number = (i + 1).toString();
  numberToName[number] = name;
  nameToNumber[name] = number;
}

let ans = "";
for (let i = n; i < n + m; i++) {
  const query = input[i];
  // 숫자인지 판별하여 해당하는 값을 ans 문자열에 추가
  if (isNaN(query)) {
    // 이름으로 주어진 경우
    ans += nameToNumber[query] + "\n";
  } else {
    // 번호로 주어진 경우
    ans += numberToName[query] + "\n";
  }
}

console.log(ans.trim());
