const fs = require("fs");
const [n] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const [n] = fs.readFileSync("예제.txt").toString().trim().split("\n");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  shift() {
    if (!this.head) return null;
    let newNode = this.head;
    this.head = newNode.next;
  }
  shiftPush() {
    if (!this.head) return null;
    let newNode = this.head;
    let push = newNode.value;
    this.head = newNode.next;

    this.push(push);
  }
  traverse() {
    while (this.head) {
      this.shift();
      this.shiftPush();
    }
  }
}

let list = new LinkedList();

for (let i = 1; i <= n; i++) {
  list.push(i);
}

list.traverse();
console.log(list.tail.value);
