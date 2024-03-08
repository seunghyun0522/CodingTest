const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let array_a = input[1].split(" ").map(Number);
let array_b = input[2].split(" ").map(Number);
let dif = {};

array_a.forEach((element) => {
  dif[element] = (dif[element] || 0) + 1;
});

array_b.forEach((element) => {
  dif[element] = (dif[element] || 0) + 1;
});

let keys = Object.keys(dif);

let cnt = 0;
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];

  if (dif[key] === 1) cnt++;
}

console.log(cnt);
