import {BinaryTreeNode} from './BinaryTreeNode';

enum Comparison {
    More = -1,
    Equal = 0,
    Less = 1
}

interface IBinaryTree<T> {
  Add(value: T, data: T): void;
  Delete(value: T, data: T): void;
  FindNode(value: T, data: T): void;
  ShowTreeConsole(): void;
  GetHead(): BinaryTreeNode<T>;
}

export class BinaryTree<T extends string | number> implements IBinaryTree<T> {

  private head: BinaryTreeNode<T>;
  private count: number;

  constructor(key?: T, data?: T) {
    this.count = 0;
    if (key === undefined) {
      this.head = null;
    } else {
        this.head = new BinaryTreeNode(key, data);
    }
  }

  /** @description Добавление элемента.
   * @params {T} - ключ; {T} - данные.
   */
  public Add(key: T, data: T): void {
    if (this.head == null) {
      this.head = new BinaryTreeNode(key, data);
    } else {
      this.RecursionAdd(this.head, key, data);
    }
    this.count++;
  }

  /** @description Рекурсивное добавление.
   * @params {BinaryTreeNode<T>} - корень дерева; {T} - ключ; {T} - данные.
   * @return {BinaryTreeNode<T>} - добавленный элемент.
   */
  private RecursionAdd (node: BinaryTreeNode<T>, key: T, data: T): BinaryTreeNode<T> {
    if (this.Compare(node.key, key) < 0) {
      if (node.leftTree == null) {
        node.leftTree = new BinaryTreeNode(key, data);
      } else {
        this.RecursionAdd(node.leftTree, key, data);
      }
    } else {
      if (node.rightTree == null) {
        node.rightTree = new BinaryTreeNode(key, data);
      } else {
        this.RecursionAdd(node.rightTree, key, data);
      }
    }
    return node;
  }

  /** @description Сравнение ключей.
   * @param {T} - ключ текущего элемента; {T} - ключ добавляемого элемента.
   * @return {number} 1 - текущее меньше вставляемого, -1 - текущее больше вставляемого, 0 - равны.
   */
  private Compare (current: T, insert: T): number {
    if (current < insert) {
      return Comparison.Less;
    } else {
      if (current > insert) {
        return Comparison.More;
      } else { return Comparison.Equal; }
    }
  }

  /** @description Вывод в консоль.
   */
  public ShowTreeConsole(): void {
    if (this.head != null) {
      this.ShowRecursion(this.head);
    }
  }

  /** @description Рекурсивный вывод.
   *  @param {BinaryTreeNode<T>} - корень дерева.
   */
  private ShowRecursion(node: BinaryTreeNode<T>): void {
    if (node != null) {
      console.log(node.key);
      this.ShowRecursion(node.leftTree);
      this.ShowRecursion(node.rightTree);
    }
  }

  /** @description Удаление элемента из дерева.
   * @param {T} ключ, по которому необходимо найти и удалить.
   */
  public Delete(key: T): void {
    const IsRemoved = this.Remove(this.head, key);
    if (IsRemoved != null) {
      this.head = IsRemoved;
      console.log(this.head);
      this.count--;
    } else {
      console.log('Такого элемента не существует!');
    }
  }

  /** @description Рекурсивное удаление.
   * @param {BinaryTreeNode<T>} - Корень дерева; {T} - ключ по которому будет производиться поиск.
   * @return {BinaryTreeNode<T>} - Корень дерева, элемент удалён. ( null в случае отсутствия элемента для удаления).
   */
  private Remove(root: BinaryTreeNode<T>, key: T): BinaryTreeNode<T> {
    if (root == null) {
      return root;
    }
    if (key < root.key) {
      root.leftTree = this.Remove(root.leftTree, key);
    } else if (key > root.key) {
      root.rightTree = this.Remove(root.rightTree, key);
           } else if (root.leftTree != null && root.rightTree != null) {
      root.key = this.Minimum(root.rightTree).key;
      root.data = this.Minimum(root.rightTree).data;
      root.rightTree = this.Remove(root.rightTree, root.key);
    } else if (root.leftTree != null) {
      root = root.leftTree;
           } else {
      root = root.rightTree;
           }
    return root;
  }

  /** @description поиск минимального ключа.
   * @param {BinaryTreeNode<T>} - элемент дерева.
   * @return {BinaryTreeNode<T>} - элемент с минимальным ключом.
   */
  private Minimum(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (node.leftTree == null) {
      return node;
    }
    return this.Minimum(node.leftTree);
  }

  /** @description Поиск в дереве элемента по ключу.
   * @param {T} - Ключ по которому производится поиск.
   */
  public FindNode(key: T): void {
    const resultOfFind = this.Contain(this.head, key);
    if (resultOfFind != null) {
      console.log(` key: ${resultOfFind.key}, data: ${resultOfFind.data} .`);
    } else {
      console.log('Такого элемента не существует!');
    }
  }

  /** @description Входит ли элемент в дерево?
   * @param {BinaryTreeNode<T>} Корень дерева; {T} - ключ по которому будет производиться поиск.
   * @return {BinaryTreeNode<T>} Найденный элемент( или null, в случае её отсутствия ).
   */
  private Contain(node: BinaryTreeNode<T>, key: T): BinaryTreeNode<T> {
    if (node == null || key === node.key) {
      return node;
    }
    if (key < node.key) {
      return this.Contain(node.leftTree, key);
    } else {
      return this.Contain(node.rightTree, key);
    }
  }

  /** @description Возвращает корень дерева.
   * @return {BinaryTreeNode<T>} - корень.
   */
  public GetHead(): BinaryTreeNode<T> {
    try {
      return this.head;
    } catch (ex) {
      console.log(ex.message);
    }
  }
}
