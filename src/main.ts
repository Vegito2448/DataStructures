import { Tree, TreeNode } from "./Tree";

console.log(`
  /**************
    Binary Tree
  **************/
`, '\n');

// Create a new binary tree

let fileSystem = new Tree<string>();

console.log(`🚀 ~ fileSystem:`, fileSystem);

let newNode = new TreeNode<string>('Team');

console.log(`🚀 ~ newNode:`, newNode);

fileSystem.root = newNode;


fileSystem.insetByPath('C:');

fileSystem.insetByPath('D:');

fileSystem.insetByPath('Users', 'C:');
fileSystem.insetByPath('Data', 'D:');





console.log(`🚀 ~ fileSystem`, fileSystem);