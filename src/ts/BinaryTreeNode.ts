class BinaryTreeNode {

  public _LeftTree: BinaryTreeNode;
  public _RightTree: BinaryTreeNode;
  public _Value: number;

  constructor(value: number) {
    this._Value = value;
  }

  public get LeftTree(): BinaryTreeNode {
    return this._LeftTree;
  }

  public set LeftTree(n: BinaryTreeNode) {
    this._LeftTree = n;
  }

  public get RightTree(): BinaryTreeNode {
    return this._RightTree;
  }

  public set RightTree(n: BinaryTreeNode) {
    this._RightTree = n;
  }

  public get Value(): number {
    return this._Value;
  }

  public set Value(n: number) {
    this._Value = n;
  }
}

