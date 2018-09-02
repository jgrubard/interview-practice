const util = require('util');

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.head = null;
  }

  insert(data, priority) {
    const node = new Node(data, priority);
    let head;
    if(!this.head) {
      this.head = node;
    } else {
      let head = this.head;
      if(priority > head.priority) {
        let head = this.head;
        this.head = node;
        node.next = head;
      } else {
        while(priority < head.priority && head.next) {
          head = head.next;
        }
        let temp = head.next;
        head.next = node;
        node.next = temp;
      }
    }
  }

  peek() {
    return this.head.data;
  }

  popMax() {
    let toReturn = this.head.data;
    this.head = this.head.next;
    return toReturn;
  }
}

const queue = new PriorityQueue();
queue.insert('Jill, Concussion', 7);
queue.insert('John, stomach pain', 5);
queue.peek();
queue.peek();
queue.insert('Dave, sprained ankle', 1);
queue.insert('Bob, breathing problems', 8)
queue.popMax();

// console.log(queue.popMax())

console.log(util.inspect(queue, { depth: null }));