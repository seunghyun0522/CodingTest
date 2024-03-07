const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let set = new Set();
for (let i = 1; i < input.length; i++) {
  let [index, info] = input[i].split(" ");
  if (info === "enter") set.add(index);
  else set.delete(index);
}

let sortSet = Array.from(set);
sortSet.sort().reverse();

let ans = "";
sortSet.forEach((element) => {
  ans += element + "\n";
});
console.log(ans);
