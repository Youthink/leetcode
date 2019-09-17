/*

       1
      / \
     2   2
    / \ / \
   3  4 4  3
  / \     / \
 5   6   6   5


 [1,2,2,null,3,null,3]

 []

 方法一： 递归

 思路：

 递归结束条件：
 都为空指针则返回 true
 只有一个为空则返回 false
 
 递归过程：
 判断两个指针当前节点值是否相等
 判断 A 的右子树与 B 的左子树是否对称
 判断 A 的左子树与 B 的右子树是否对称

 时间复杂度 O(n) 因为我们遍历整个输入树一次，所以总的运行时间为 O(n)，其中 n 是树中结点的总数。
 空间复杂度 O(n) 递归调用的次数受树的高度限制。在最糟糕情况下，树是线性的，其高度为 O(n)

*/


 function TreeNode(val, left, right) {
  this.val = val;
  this.left= left || null;
  this.right = right || null;
 }

 const treeNode30 = new TreeNode(3);
 const treeNode31 = new TreeNode(4);
 const treeNode32 = new TreeNode(4);
 const treeNode33 = new TreeNode(3);
 const treeNode20 = new TreeNode(2, treeNode30, treeNode31);
 const treeNode21 = new TreeNode(2, treeNode32, treeNode33);
 const treeNode10 = new TreeNode(1, treeNode20, treeNode21);

 const isSymmetric = (root) => {
  if (root === null) {
    return true;
  }
  const isMirror = (a, b) => {
    if (a === null && b === null) {
      return true;
    }
    if ((a && a.val) !== (b && b.val)) {
      return false;
    }
    return isMirror(a && a.left, b && b.right) && isMirror(a && a.right, b && b.left);
  }
  return isMirror(root.left, root.right);
};

console.log(isSymmetric(treeNode10))
