const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);

let people = {};

for (let i = 1; i < n + m; i++) {
  let name = input[i];
  people[name] = (people[name] || 0) + 1;
}

let sortArray = [];

let keys = Object.keys(people);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = people[key];
  if (value > 1) sortArray.push([key, value]);
}

sortArray.sort();

console.log(sortArray.length);

for (let i = 0; i < sortArray.length; i++) {
  console.log(sortArray[i][0]);
}
