const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr1 = input[1].split(" ");
const arr2 = input[3].split(" ");

let set = new Set(arr1);
let result = [];

arr2.forEach((element) => {
  result.push(set.has(element) ? 1 : 0);
});

console.log(result.join("\n"));
