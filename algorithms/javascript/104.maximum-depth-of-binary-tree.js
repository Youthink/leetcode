/*

       1
      / \
     2   2
    / \ / \
   3  4 4  3
  /       / \
 5       6   5
        /
      7

 []

 我第一次做出的答案：

  const maxDepth = (root) => {
  let depth = 0;
  if (root === null) {
    return depth;
  }

  if (root.val !== null) {
    depth +=1;
  }

  const getDepth = (node, depth) => {
    if (node === null) {
      return depth;
    }

    if (node.val !== null)  {
      depth += 1;
      return Math.max(getDepth(node.left, depth), getDepth(node.right, depth));
    }
  }
  return Math.max(getDepth(root.left, depth), getDepth(root.right, depth));
};

因为我加了一个 depth 的变量，好像搞复杂了，能不能去掉那？

const maxDepth = (root) => {
  if (root === null) {
    return 0;
  }
  return Math.max(getDepth(root.left), getDepth(root.right)) +1;
};

depth 也可以是递归的一部分。。。。

简化后，就是人家那种更简练的写法。。。。

const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) +1;
};

在题解里看到两个其他的名词：广度优先算法和深度优先算法。

深度优先算法：https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2
广度优先算法：https://zh.wikipedia.org/wiki/%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2

*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left= left || null;
  this.right = right || null;
 }

 const treeNode51 = new TreeNode(7);
 const treeNode44 = new TreeNode(5);
 const treeNode43 = new TreeNode(6, treeNode51);
 const treeNode40 = new TreeNode(5);
 const treeNode30 = new TreeNode(3, treeNode40);
 const treeNode31 = new TreeNode(4);
 const treeNode32 = new TreeNode(4, treeNode43);
 const treeNode33 = new TreeNode(3, treeNode44);
 const treeNode20 = new TreeNode(2, treeNode30, treeNode31);
 const treeNode21 = new TreeNode(2, treeNode32, treeNode33);
 const treeNode10 = new TreeNode(1, treeNode20, treeNode21);

 const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) +1;
};

console.log(maxDepth(treeNode10))
