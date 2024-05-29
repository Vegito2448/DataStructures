import { Tree, TreeNode } from "./Tree";

console.log(`
  /**************
    Binary Tree
  **************/
`, '\n');

// Create a new binary tree

let fileSystem = new Tree<string>();

console.log(`🚀 ~ fileSystem:`, fileSystem);

let newNode = new TreeNode<string>('My Computer');

console.log(`🚀 ~ newNode:`, newNode);

fileSystem.root = newNode;


fileSystem.insertByPath('C:');

fileSystem.insertByPath('D:');
fileSystem.insertByPath('Data', 'D:');

fileSystem.insertByPath('Users', 'C:');
fileSystem.insertByPath('Windows', 'C:');
fileSystem.insertByPath('Peña', 'C:/Users');
fileSystem.insertByPath('Desktop', 'C:/Users/Peña');
fileSystem.insertByPath('Documents', 'C:/Users/Peña');
fileSystem.insertByPath('Studying Material', 'C:/Users/Peña/Documents');





console.log(`🚀 ~ fileSystem`, fileSystem);