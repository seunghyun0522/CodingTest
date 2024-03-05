const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n")
  .map(Number);

let theNumberAtTheEnd = 665;

while (input[0] > 0) {
  theNumberAtTheEnd++;

  if (theNumberAtTheEnd.toString().includes("666")) {
    input[0]--;
  }
}

console.log(theNumberAtTheEnd);
