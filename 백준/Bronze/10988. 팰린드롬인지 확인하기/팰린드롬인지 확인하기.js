const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// input을 반대로 뒤집어줍니다.
const reverse = input.split("").reverse().join("");

// input과 reverse가 같다면 1을, 아니라면 0을 출력합니다.
console.log(input === reverse ? 1 : 0);