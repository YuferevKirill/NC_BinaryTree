// TODO исправить дэйту с помощью обобщения!!!
// TODO Добавить дэйту в удаление и поиск
// TODO Возвращать что-то при поиске и удалении и добавлении наверно.

interface IBinaryTreeNode {
  LeftTree: BinaryTreeNode;
  RightTree: BinaryTreeNode;
  Value: number;
  Data: number;
}

export class BinaryTreeNode implements IBinaryTreeNode{

  public LeftTree: BinaryTreeNode;
  public RightTree: BinaryTreeNode;
  public Value: number;
  public Data: number;

  public constructor(value: number, data: number) {
    this.Value = value;
    this.Data = data;
    this.LeftTree = null;
    this.RightTree = null;
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

