/*
1->2->3->4->5->NULL

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l5 = ListNode(5);
const l4 = ListNode(4);
const l3 = ListNode(3);
const l2 = ListNode(2);
const l1 = ListNode(1);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;

要求使用 迭代和递归两种方式实现

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 方法一：迭代

   类似生成一个新的链表


   时间复杂度：O(n)，假设 n 是列表的长度，时间复杂度是 O(n)
   空间复杂度: O(1)

const reverseList = head => {
  let prev = null;
  let curr = head;

  while(curr) {
      let tamp = curr;
      curr =  curr.next;
      tamp.next = prev;
      prev = tamp;
  }
  return prev;
};

方法二：递归
时间复杂度：O(n)，假设 n 是列表的长度，那么时间复杂度为 O(n)
空间复杂度：O(n)，由于使用递归，递归调用栈消耗空间，共 n-1 层递归，故空间复杂度为 O(n)。

var reverseList = function(head) {
  if (!head || !head.next) return head;
  let next = head.next; // next节点，反转后是最后一个节点
  let reverseHead = reverseList(next);
  head.next = null; // 裁减 head
  next.next = head; // 尾接
  return reverseHead;
};

方法三：尾递归
时间: O(n). 等同于正常推进，故 O(n).
空间: O(1). 尾递归方式，重复使用一个空间故空间复杂度为 O(1).

var reverseList = function(head) {
  return reverse(null, head);
};

function reverse (prev, curr) {
  if (!curr) return prev;
  let tmp = curr.next;
  curr.next = prev;
  return reverse(curr, tmp);
}

*/
