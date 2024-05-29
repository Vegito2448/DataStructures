
import Node from "./Node";

interface ILinkedList<T> {
  addToHead(data: T): void;
  addToTail(data: T): void;
  removeHead(): Node<T> | null;
  removeTail(): Node<T> | null;
  removeNode(node: Node<T> | null): Node<T> | null;
  findElement(data: T): Node<T> | null;
  print(): void;
  getSize?(): number;
}

class LinkedList<T> implements ILinkedList<T>{
  private head: Node<T> | null;
  private last: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  addToHead(data: T): void {
    const newNode = new Node(data);
    const currentNode = this.head;
    this.length++;
    // First Implementation as Queue
    /*
    if (currentNode) {

      newNode.setNextNode(currentNode);

    }

    this.head = newNode;*/

    // Last Implementation as Stack

    if (currentNode === null) {
      this.head = newNode;
    } else {
      this.last!.next = newNode;
    }
    this.last = newNode;



  }

  addToTail(data: T): void {
    let currentNode = this.head;

    if (currentNode === null) {

      this.addToHead(data);

      return;

    } else {
      const newNode = new Node(data);

      // While iteration
      while (currentNode.next !== null) {

        currentNode = currentNode.next;

      }

      currentNode.next = newNode;

      // Recursive
      /* const getLastNode = (node: Node<T>): Node<T> => node.next === null ? node : getLastNode(node.next);

      const lastNode = getLastNode(currentNode);

      lastNode.next = newNode; */

      this.length++;

    }

  }

  removeHead(): Node<T> | null {
    const currentHead = this.head;

    if (currentHead === null) {
      return null;
    } else {

      this.head = currentHead.next;

      this.length--;

      return currentHead;

    }
  }

  removeTail(): Node<T> | null {
    let currentNode = this.head;

    if (currentNode === null) {
      return null;
    } else if (currentNode.next === null) {
      this.head = null;
      this.length--;
      return currentNode;
    } else {
      while (currentNode.next !== null && currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }

      const lastNode = currentNode.next;
      currentNode.next = null;
      this.length--;
      return lastNode;
    }

  }

  removeNode(node: Node<T> | null): Node<T> | null {

    let currentNode = this.head;

    let previousNode = null;

    if (currentNode === node) {
      return this.removeHead();
    } else {
      while (currentNode && currentNode !== node) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      if (currentNode && previousNode) {
        previousNode.next = currentNode.next;
        this.length--;
        return currentNode;
      }
    }


    return null;
  }

  findElement(data: T) {

    let currentNode = this.head;

    while (currentNode && currentNode.data !== data) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      currentNode = currentNode.next;
    }
    return this.head;
  }

  getLastElement(): Node<T> | null {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findNodeAt(index: number) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index && currentNode !== null) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    return currentNode !== null ? currentNode.data : currentNode;
  }

  delete(element: T) {
    let currentNode = this.head;

    if (!currentNode) return currentNode;

    if (currentNode.data === element) {
      return this.removeHead();
    }

    while (currentNode && currentNode?.next?.data !== element) {
      currentNode = currentNode?.next;
    }
    if (currentNode && currentNode.next) {
      currentNode.next = currentNode.next.next;
    }
    return currentNode;
  }

  deleteByNode(node: Node<T> | null) {
    if (!node || !node.next) return null;
    node.data = node.next?.data;
    node.next = node.next?.next;
    return node;
  }

}





export default LinkedList;