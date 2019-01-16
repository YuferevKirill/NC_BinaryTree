export class BinaryTreeNode {

  public _LeftTree: BinaryTreeNode;
  public _RightTree: BinaryTreeNode;
  public _Value: number;

  public constructor(value: number) {
    this._Value = value;
    this._LeftTree = null;
    this._RightTree = null;
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

