interface IBinaryTreeNode<T> {
  leftTree: BinaryTreeNode<T>;
  rightTree: BinaryTreeNode<T>;
  key: T;
  data: T;
}

export class BinaryTreeNode<T> implements IBinaryTreeNode<T>{

  public leftTree: BinaryTreeNode<T>;
  public rightTree: BinaryTreeNode<T>;
  public key: T;
  public data: T;

  public constructor(key: T, data: T) {
    this.leftTree = null;
    this.rightTree = null;
    this.key = key;
    this.data = data;
  }

  // public get LeftTree(): BinaryTreeNode {
  //   return this._LeftTree;
  // }
  //
  // public set LeftTree(n: BinaryTreeNode) {
  //   this._LeftTree = n;
  // }
  //
  // public get RightTree(): BinaryTreeNode {
  //   return this._RightTree;
  // }
  //
  // public set RightTree(n: BinaryTreeNode) {
  //   this._RightTree = n;
  // }
  //
  // public get Value(): number {
  //   return this.Value;
  // }
  //
  // public set Value(n: number) {
  //   this.Value = n;
  // }
}

