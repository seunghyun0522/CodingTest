const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

solution(input[0].split(" ").map(Number));
function solution(input) {
  const [x, y, w, h] = input;
  let answer = [];

  answer.push(Math.abs(y - h));
  answer.push(Math.abs(y - 0));
  answer.push(Math.abs(w - x));
  answer.push(Math.abs(x - 0));

  console.log(Math.min(...answer));
}
