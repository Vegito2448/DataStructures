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

  insetByPath(value: T, path?: Array<T> | T) {

    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }

    if (!path || (Array.isArray(path) && !path.length))
      this.root.addChild(value);

    if (!Array.isArray(path)) {

      if (path instanceof TreeNode) {

        path.addChild(value);

      } else {

        if (typeof path === 'string' && path.includes('/')) {

          const splitedPath = path.split('/');

          if (splitedPath.length === 1) {
            this.root.addChild(value);
            return;
          }


        }
        this.root.addChild(value);

      }

    } else if (Array.isArray(path)) {
      const firstItemType = typeof path[0];

      const isPathInstanceOfSameType = path.every(item => typeof item === firstItemType);


      if (!isPathInstanceOfSameType) {
        console.error('The path must be of the same type');
        return;
      }

      const lastElement = path.at(-1);

      if (lastElement instanceof TreeNode) {

        lastElement.addChild(value);

      } else {

      }






    }




    // if (path === 'C:') {
    //   let node = this.root?.getChildByValue(path);
    //   node?.addChild(value);
    // }
  }



}
export { Tree, TreeNode };

