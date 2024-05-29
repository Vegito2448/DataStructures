class Node<T> {

  constructor(public value: T, public left: Node<T> | null = null, public right: Node<T> | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }


}

class BinaryTree<T> {
  public root: Node<T> | null = null;

  insert(value: T, path?: string, where?: 'left' | 'right') {
    let node = new Node<T>(value);
    if (!path) {
      this.root = node;
      return node;
    }
    if (where) {
      const currentNode = this.findNodeByXpath(path);
      if (!currentNode) return null;
      currentNode[where] = node;
    }

    return node;
  }

  findChild(currentNode: Node<T> | null, value: T) {
    if (!currentNode || !value) return null;

    if (currentNode.value === value) return currentNode;

    if (currentNode.left && currentNode.left.value === value) return currentNode.left;
    if (currentNode.right && currentNode.right.value === value) return currentNode.right;

    return null;
  }

  findNodeByXpath(path: string) {
    let currentNode = this.root;
    if (!currentNode || !path) return null;
    const routes = path.split('/');

    for (let index = 0; index < routes.length - 1; index++) {
      currentNode = this.findChild(currentNode, routes[index + 1] as T);
    }

    if (!currentNode) return null;

    if (currentNode.value === routes[routes.length - 1]) return currentNode;



    return currentNode;
  }

  Scooch(node: Node<T> | null, space: number) {
    if (!node) return;
    console.log(' '.repeat(space), node?.value);

    this.Scooch(node?.left, space + 4);
    this.Scooch(node?.right, space + 4);
  }

}

export { BinaryTree, Node as BinaryTreeNode };


/* EXAMPLE */

console.log(`
  /**************
    Binary Tree
  **************/
`, '\n');

// Create a new binary tree

let fileSystem = new BinaryTree<string>();


// Insert a root node
fileSystem.insert('Information');
fileSystem.insert('day', 'Information', 'left');
fileSystem.insert('night', 'Information', 'right');
fileSystem.insert('data', 'Information/day', 'left');
fileSystem.insert('food.xls', 'Information/day/data', 'left');
fileSystem.insert('calcs.txt', 'Information/day/data', 'right');
fileSystem.insert('expenses.txt', 'Information/night', 'right');
fileSystem.insert('restaurant', 'Information/night', 'left');