const fs = require("fs");
//const input = fs.readFileSync("예제.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; // New: Previous pointer
  }
}

class DoublyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  add_first(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode; // New: Set previous pointer for the old head
      this.head = newNode;
    }
    this.length++;
  }

  add_last(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  get_first() {
    if (this.length <= 0) return -1;
    else {
      let value = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null; // New: Set previous pointer to null for the new head
      } else {
        this.tail = null; // New: If the list becomes empty, update the tail
      }
      this.length--;
      return value;
    }
  }

  get_last() {
    if (this.length <= 0) return -1;
    let value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null; // New: Set next pointer to null for the new tail
    } else {
      this.head = null; // New: If the list becomes empty, update the head
    }
    this.length--;
    return value;
  }

  get_length() {
    return this.length;
  }

  isEmpty() {
    return this.length <= 0 ? 1 : 0;
  }

  print_first() {
    return this.length ? this.head.value : -1;
  }

  print_last() {
    return this.length ? this.tail.value : -1;
  }
}

let list = new DoublyLinkedList();
let ans = [];
for (let i = 0; i < n; i++) {
  let [cmd, value] = arr[i].split(" ").map(Number);
  switch (cmd) {
    case 1:
      list.add_first(value);
      break;
    case 2:
      list.add_last(value);
      break;
    case 3:
      ans.push(list.get_first());
      break;
    case 4:
      ans.push(list.get_last());
      break;
    case 5:
      ans.push(list.get_length());
      break;
    case 6:
      ans.push(list.isEmpty());
      break;
    case 7:
      ans.push(list.print_first());
      break;
    case 8:
      ans.push(list.print_last());
      break;
  }
}

console.log(ans.join("\n"));
