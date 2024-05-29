import Node from "./Node";

class Stack<T> {
  top: Node<T> | null;
  length: number;
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    return this.top === null;
  }

  push(item: T) {
    const node = new Node(item, this.top);
    this.top = node;
    this.length++;
    return this.top;
  }

  pop() {
    if (this.isEmpty())
      return null;


    const data = this.top!.data;
    this.top = this.top!.next;
    this.length--;
    return data;
  }

  peek() {
    if (this.isEmpty())
      return null;


    return this.top!.data;
  }



  print() {
    if (this.isEmpty())
      return null;

    let result = '';

    let current = this.top;

    while (current !== null) {

      result += `${current.data}${current.next ? ', ' : ''}`;

      current = current.next;
    }
    return result;
  }

  clear() {
    this.top = null;
    this.length = 0;
  }

  hasElement(item: T) {
    if (this.isEmpty()) {
      return false;
    }

    let current = this.top;

    while (current !== null && current.data !== item) {
      current = current.next;
    }
    return current !== null;
  }


}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.push(6);
stack.pop();
stack.push(100);


console.log(`🚀 ~ stack:`, stack);

console.log(`🚀 ~ stack.peek():`, stack.peek());

console.log(`🚀 ~ stack.isEmpty():`, stack.isEmpty());

console.log(`🚀 ~ stack.print():`, stack.print());

console.log(`🚀 ~ stack Length:`, stack.length);

console.log(`🚀 ~ stack.hasElement():`, stack.hasElement(1));

export default Stack;