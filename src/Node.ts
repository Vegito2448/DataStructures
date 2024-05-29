// Node
// data information
// next node
// Head -> tail
// Node-> Node -> Node -> Node -> Node -> null
class Node<T> {

  constructor(public data: T, public next: Node<T> | null = null) {
  }

  setNextNode(nextNode: Node<T> | null) {
    if (nextNode instanceof Node || nextNode === null) {
      this.next = nextNode;
    }
  }

  getNextNode() {
    return this.next;
  }

  getData() {
    return this.data;
  }

}
/* const book1 = new Node('Harry Potter');

const book2 = new Node('The Da Vinci Code');
book1.setNextNode(book2);

const book3 = new Node('The Great Gatsby');
book2.setNextNode(book3);

console.log(`🚀 ~ book1:`, book1);

console.log(`🚀 ~ book1 getNextNode():`, book1.getNextNode());

console.log(`🚀 ~ book1 getData():`, book1.getData());

function traverseNodes(node: Node<string> | null) {
  while (node !== null) {
    console.log(`🚀 ~ traverseNodes ~ node.getData()`, node.getData());
    node = node.getNextNode();
  }
}

traverseNodes(book1); */



export default Node;