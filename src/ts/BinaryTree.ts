import {BinaryTreeNode} from './BinaryTreeNode';

export class BinaryTree {

  private _head: BinaryTreeNode;
  private _count: number;

  constructor(value: number) {
    this._count = 1;
    if (value === null) {
      this._head = null;
    } else {
        this._head = new BinaryTreeNode(value);
    }
  }

  public Add(value: number): void {
    if (this._head == null) {
      this._head = new BinaryTreeNode(value);
    } else {
      this.RecursionAdd(this._head, value);
    }
    this._count++;
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
    if (this._head != null) {
      this.ShowRecursion(this._head);
    }
  }

  private ShowRecursion(element: BinaryTreeNode): void {
    if (element != null) {
      console.log(element._Value);
      this.ShowRecursion(element._LeftTree);
      this.ShowRecursion(element._RightTree);
    }
  }

  public Contain(value: number): boolean {
    return true;
  }
}
