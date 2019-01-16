import {BinaryTree} from './BinaryTree';

let tree = new BinaryTree(50);


tree.Add(10);
tree.Add(60);
tree.Add(5);
tree.Add(11);
tree.Add(55);
tree.Add(65);

tree.ShowTreeConsole();

tree.FindNode(50);
tree.FindNode(55);
tree.FindNode(1244);

tree.Delete(50);
tree.ShowTreeConsole();
tree.FindNode(50);
