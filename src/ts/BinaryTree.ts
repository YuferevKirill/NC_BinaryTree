class BinaryTree {

  private _head: BinaryTreeNode;
  private _count: number;

  // constructor() {
  //
  // }

  public Add(value: number): void {
    if (this._head == null) {
      this._head = new BinaryTreeNode(value);
    } else {
      this.Addto(this._head, value);
    }
    this._count++;
  }

  private Addto(node: BinaryTreeNode, value: number) {
    if (value < 0) {
      if (node._LeftTree == null) {
        node._LeftTree = new BinaryTreeNode(value);
      } else {
        this.Addto(node._LeftTree, value);
      }
    } else {
      if (node._RightTree == null) {
        node._RightTree = new BinaryTreeNode(value);
      } else {
        this.Addto(node._RightTree, value);
      }
    }
  }
}
