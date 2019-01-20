import {BinaryTree} from './BinaryTree';

const tree = new BinaryTree();
const $d = document;

function addNode(node, parentEl = $d.body) {
  if (!node) {
    return;
  }
  const emptyNode = new BinaryTree();
  emptyNode.Add('X', 'X');
  let el = $d.createElement('div');
  el.classList.add('node');
  el.insertAdjacentHTML('beforeend', `<span class="name">${node.key}</span><div class="container"></div>`);
  parentEl.appendChild(el);
  if (node.leftTree || node.rightTree) {
    el = el.querySelector('.container');
    if (node.leftTree == null) {
      addNode(emptyNode.GetHead(), el);
    } else {
      addNode(node.leftTree, el);
    }
    if (node.rightTree == null) {
      addNode(emptyNode.GetHead(), el);
    } else {
      addNode(node.rightTree, el);
    }
  } else {
    if ((node.leftTree == null) && (node.rightTree == null)) {
      el.classList.add('leaf');
    }
  }
}

// tree.Add('b', 10);
// // tree.Add('a', 60);
// // tree.Add('c', 5);
// // tree.Add(11, 11);
// // tree.Add(55, 55);
// // tree.Add(65, 65);
// // tree.FindNode(50);
// // tree.FindNode(55);
// // tree.FindNode(1244);
// // tree.Delete('a');
// // tree.ShowTreeConsole();
// // tree.FindNode(50);

tree.Add(50, 50);
tree.Add(10, 10);
tree.Add(60, 60);
tree.Add(5, 5);
tree.Add(11, 11);
tree.Add(55, 55);
tree.Add(54, 54);
tree.Add(65, 65);
tree.Add(66, 64);

addNode(tree.GetHead());
