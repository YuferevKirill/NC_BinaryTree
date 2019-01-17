import {BinaryTree} from './BinaryTree';

const tree = new BinaryTree();

tree.Add('b', 10);
tree.Add('a', 60);
tree.Add('c', 5);
tree.Add(11, 11);
tree.Add(55, 55);
tree.Add(65, 65);

tree.ShowTreeConsole();

tree.FindNode(50);
tree.FindNode(55);
tree.FindNode(1244);

tree.Delete('a');
tree.ShowTreeConsole();
tree.FindNode(50);
