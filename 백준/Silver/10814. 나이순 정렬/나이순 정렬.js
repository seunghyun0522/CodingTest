const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let arr = [];

for (let i = 1; i < input.length; i++) {
  let [age, name] = input[i].split(" ");
  arr.push([age, name]);
}

arr.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
});

let ans = "";
arr.forEach((element) => {
  ans += element[0] + " " + element[1] + "\n";
});
console.log(ans);
