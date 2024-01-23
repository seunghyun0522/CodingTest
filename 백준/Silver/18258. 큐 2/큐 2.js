const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const [n, ...arr] = fs.readFileSync("예제.txt").toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  pop() {
    if (!this.head) return -1;
    let pop = this.head;
    this.head = pop.next;
    this.length--;
    return pop.value;
  }
  front() {
    if (!this.head) return -1;
    return this.head.value;
  }
  back() {
    if (!this.head) return -1;
    return this.tail.value;
  }
  empty() {
    if (!this.head) return 1;
    else return 0;
  }
  size() {
    return this.length;
  }
}

let queue = new Queue();
let answer = "";
for (let i = 0; i < n; i++) {
  let [cmd, value] = arr[i].split(" ");
  switch (cmd) {
    case "push":
      queue.enqueue(Number(value));
      break;
    case "pop":
      answer += queue.pop() + " ";
      break;
    case "size":
      answer += queue.size() + " ";
      break;
    case "empty":
      answer += queue.empty() + " ";
      break;
    case "front":
      answer += queue.front() + " ";
      break;
    case "back":
      answer += queue.back() + " ";
      break;
    default:
      break;
  }
}
console.log(answer.split(" ").join("\n"));
