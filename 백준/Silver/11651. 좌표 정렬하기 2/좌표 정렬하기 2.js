const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let arr = [];

for (let i = 1; i <= parseInt(input[0]); i++) {
  let [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer = answer + arr[i][0] + " " + arr[i][1] + "\n";
}
console.log(answer);
