class TreeNode<T> {
  constructor(public value: T, public children: Array<TreeNode<T>> = []) { }

  getChildByValue(value: T) {
    return this.children.find((child) => child.value === value);
  }

  addChild(value: T) {

    if (value instanceof TreeNode)
      this.children.push(value);
    else if (this.value)
      this.children.push(new TreeNode(value));

  }

}

class Tree<T> {
  constructor(public root: TreeNode<T> | null = null) { }

  insertByPath(value: T, path?: string) {

    let selectedNode = this.selectedByPath(path);

    if (!selectedNode) return;

    selectedNode.addChild(value);

    return selectedNode;
  }

  selectedByPath(path?: string) {
    let selectedNode = this.root;
    if (!selectedNode || !path) return selectedNode;
    let pathArray = path ? path.split('/') : [];

    for (let i = 0; i < pathArray.length; i++) {
      let child = selectedNode?.getChildByValue(pathArray[i] as T);
      if (child)
        selectedNode = child;
      else
        throw new Error(`Path not found: ${path} at ${pathArray[i]}`);
    }

    return selectedNode;
  }



}
export { Tree, TreeNode };

