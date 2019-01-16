import {BinaryTree} from './BinaryTree';

const tree = new BinaryTree(50, 50);

tree.Add(10, 10);
tree.Add(60, 60);
tree.Add(5, 5);
tree.Add(11, 11);
tree.Add(55, 55);
tree.Add(65, 65);

tree.ShowTreeConsole();

tree.FindNode(50);
tree.FindNode(55);
tree.FindNode(1244);

tree.Delete(50);
tree.ShowTreeConsole();
tree.FindNode(50);
