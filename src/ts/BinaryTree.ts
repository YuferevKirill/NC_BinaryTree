import {BinaryTreeNode} from './BinaryTreeNode';

interface IBinaryTree {
  head: BinaryTreeNode;
  count: number;

  Add(value: number): void;
  Delete(value: number): void;
  FindNode(value: number): void;
}

export class BinaryTree {

  private head: BinaryTreeNode;
  private count: number;

  constructor(value: number, data: number) {
    this.count = 0;
    if (value === null) {
      this.head = null;
    } else {
        this.head = new BinaryTreeNode(value, data);
    }
  }

  public Add(value: number, data: number): void {
    if (this.head == null) {
      this.head = new BinaryTreeNode(value, data);
    } else {
      this.RecursionAdd(this.head, value, data);
    }
    this.count++;
  }

  private RecursionAdd (node: BinaryTreeNode, value: number, data: number): void {
    if (this.Compare(node.Value, value) < 0) {
      if (node.LeftTree == null) {
        node.LeftTree = new BinaryTreeNode(value, data);
      } else {
        this.RecursionAdd(node.LeftTree, value, data);
      }
    } else {
      if (node.RightTree == null) {
        node.RightTree = new BinaryTreeNode(value, data);
      } else {
        this.RecursionAdd(node.RightTree, value, data);
      }
    }
  }

  /** @description Сравнение текущей ноды со значением, которое хотим вставить
   * @param {number} то, что в текущей ноде, {number} то, что будем вставлять
   * @return {number} 1 = текущее меньше вставляемого, -1 = текущее больше вставляемого, 0 = равны.
   */
  private Compare (current: number, insertable: number): number {
    if (current < insertable) {
      return 1;
    } else {
      if (current > insertable) {
        return -1;
      } else { return 0; }
    }
  }

  public ShowTreeConsole(): void {
    if (this.head != null) {
      this.ShowRecursion(this.head);
    }
  }

  private ShowRecursion(element: BinaryTreeNode): void {
    if (element != null) {
      console.log(element.Value);
      this.ShowRecursion(element.LeftTree);
      this.ShowRecursion(element.RightTree);
    }
  }

  private Minimum(element: BinaryTreeNode): BinaryTreeNode {
    if (element.LeftTree == null) {
      return element;
    }
    return this.Minimum(element.LeftTree);
  }

  public Delete(value: number): void {
    console.log(this.Remove(this.head, value));
  }

  private Remove(root: BinaryTreeNode, value: number): BinaryTreeNode {
    if (root == null) {
      return root;
    }
    if (value < root.Value) {
      root.LeftTree = this.Remove(root.LeftTree, value);
    } else if (value > root.Value) {
      root.RightTree = this.Remove(root.RightTree, value);
           } else if (root.LeftTree != null && root.RightTree != null) {
      root.Value = this.Minimum(root.RightTree).Value;
      root.RightTree = this.Remove(root.RightTree, root.Value);
    } else if (root.LeftTree != null) {
      root = root.LeftTree;
           } else {
      root = root.RightTree;
           }
    return root;
  }

  public FindNode(value: number): void {
    if (this.Contain(this.head, value)) {
      console.log('true');
    } else {
      console.log('false');
    }
  }

  private Contain(element: BinaryTreeNode, value: number): BinaryTreeNode {
    if (element == null || value === element.Value) {
      return element;
    }
    if (value < element.Value) {
      return this.Contain(element.LeftTree, value);
    } else {
      return this.Contain(element.RightTree, value);
    }
  }
}
