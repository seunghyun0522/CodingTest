const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let str = input[0];

let words = {};
let n = str.length;

let end = 1;
while (end <= n) {
  for (let i = 0; i < n; i++) {
    if (i + end > n) break;
    let word = str.slice(i, i + end);
    // console.log(word);
    words[word] = (words[word] || 0) + 1;
  }
  end++;
}

console.log(Object.keys(words).length);
