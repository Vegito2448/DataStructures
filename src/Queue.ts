import Node from "./Node";

class Queue<T> {
  private front: Node<T> | null;
  private end: Node<T> | null;
  length: number;


  constructor() {
    this.front = null;
    this.end = null;
    this.length = 0;
  }

  enqueue(item: T) {
    const newNode = new Node(item);

    this.length++;

    if (this.isEmpty()) {
      console.log('this.isEmpty() :>> ', this.isEmpty());
      this.front = newNode;

      this.end = newNode;

      return;
    }
    console.log('newNode :>> ', newNode);
    this.end!.next = newNode;

    this.end = newNode;

    return newNode;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const result = this.front!.data;
    this.front = this.front!.next;
    this.length--;

    if (this.isEmpty()) {
      this.end = null;
    }

    return result;
  }


  isEmpty() {
    return !this.length || this.front === null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front!.data;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    }
    let result = '';
    let current = this.front;
    while (current !== null) {
      result += `${current.data}${current.next ? ', ' : ''}`;
      current = current.next;
    }
    return result;
  }

}

// Data Structure Queue

// import Queue from "./Queue";

/* const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(`🚀 ~ queue:`, queue);

console.log(`🚀 ~ queue.getSize():`, queue.length());
console.log(`🚀 ~ queue.isEmpty():`, queue.isEmpty());
console.log(`🚀 ~ queue.peek():`, queue.peek());
console.log(`🚀 ~ queue.print():`, queue.print()); */


export default Queue;

