const fs = require("fs");
//const n = fs.readFileSync("예제.txt").toString().trim().split("\n").map(Number);
//const [n, ...arr] = fs.readFileSync("예제.txt").toString();

//

const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const tree = {};
let result = "";
for (let i = 0; i < arr.length; i++) {
  let [node, left, right] = arr[i].split(" ");
  tree[node] = [left, right];

  //   console.log(tree[node]);
}

function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  result += node;
  preorder(left);
  preorder(right);
}

function inorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inorder(left);
  result += node;
  inorder(right);
}

function postorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  result += node;
}
preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);
