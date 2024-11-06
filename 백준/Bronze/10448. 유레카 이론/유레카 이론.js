const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("./ex.txt").toString()
)
  .trim()
  .split("\n");

let NUM = parseInt(input[0]);

for (let i = 1; i <= NUM; i++) {
  let result = eureka(parseInt(input[i]));
  console.log(result);
}


function eureka(num) {
  for (let i = 1; i < 45; i++) {
    for (let j = i; j < 45; j++) {
      for (let k = j; k < 45; k++) {
        if (triangle(i) + triangle(j) + triangle(k) === num) return 1;
      }
    }
  }

  return 0;
}

function triangle(n) {
  return (n * (n + 1)) / 2;
}
