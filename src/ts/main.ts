import {BinaryTree} from './BinaryTree';

const tree = new BinaryTree();

// tree.Add('b', 10);
// // tree.Add('a', 60);
// // tree.Add('c', 5);
// // tree.Add(11, 11);
// // tree.Add(55, 55);
// // tree.Add(65, 65);
// //
// // tree.ShowTreeConsole();
// //
// // tree.FindNode(50);
// // tree.FindNode(55);
// // tree.FindNode(1244);
// //
// // tree.Delete('a');
// // tree.ShowTreeConsole();
// // tree.FindNode(50);

tree.Add(50, 50);
tree.Add(10, 10);
tree.Add(60, 60);
tree.Add(5, 5);
tree.Add(11, 11);
tree.Add(55, 55);

const $d = document;
function addNodeFromObj(obj, parentEl = $d.body) {
  if (!obj) {
    return;
  }
  let el = $d.createElement('div');
  el.classList.add('node');
  el.insertAdjacentHTML('beforeend', `<span class="name">${obj.key}</span><div class="container"></div>`);
  parentEl.appendChild(el);
  if (obj.leftTree || obj.rightTree) {
    el = el.querySelector('.container');
    addNodeFromObj(obj.leftTree, el);
    addNodeFromObj(obj.rightTree, el);
  } else {
    el.classList.add('leaf');
  }
}

addNodeFromObj(tree.GetHead());
