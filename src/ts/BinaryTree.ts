import {BinaryTreeNode} from './BinaryTreeNode';

export class BinaryTree {

  private head: BinaryTreeNode;
  private count: number;

  constructor()
  constructor(value?: number) {
    this.count = 0;
    if (value === null) {
      this.head = null;
    } else {
        this.head = new BinaryTreeNode(value);
    }
  }

  public Add(value: number): void {
    if (this.head == null) {
      this.head = new BinaryTreeNode(value);
    } else {
      this.RecursionAdd(this.head, value);
    }
    this.count++;
  }

  private RecursionAdd (node: BinaryTreeNode, value: number): void {
    if (this.Compare(node._Value, value) < 0) {
      if (node._LeftTree == null) {
        node._LeftTree = new BinaryTreeNode(value);
      } else {
        this.RecursionAdd(node._LeftTree, value);
      }
    } else {
      if (node._RightTree == null) {
        node._RightTree = new BinaryTreeNode(value);
      } else {
        this.RecursionAdd(node._RightTree, value);
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
      console.log(element._Value);
      this.ShowRecursion(element._LeftTree);
      this.ShowRecursion(element._RightTree);
    }
  }

  private Minimum(element: BinaryTreeNode): BinaryTreeNode {
    if (element._LeftTree == null) {
      return element;
    }
    return this.Minimum(element._LeftTree);
  }

  public Delete(value: number): void {
    console.log(this.Remove(this.head, value));
  }

  private Remove(root: BinaryTreeNode, value: number): BinaryTreeNode {
    if (root == null) {
      return root;
    }
    if (value < root._Value) {
      root._LeftTree = this.Remove(root._LeftTree, value);
    } else if (value > root._Value) {
      root._RightTree = this.Remove(root._RightTree, value);
           } else if (root._LeftTree != null && root._RightTree != null) {
      root._Value = this.Minimum(root._RightTree)._Value;
      root._RightTree = this.Remove(root._RightTree, root._Value);
    } else if (root._LeftTree != null) {
      root = root._LeftTree;
           } else {
      root = root._RightTree;
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
    if (element == null || value === element._Value) {
      return element;
    }
    if (value < element._Value) {
      return this.Contain(element._LeftTree, value);
    } else {
      return this.Contain(element._RightTree, value);
    }
  }
}
