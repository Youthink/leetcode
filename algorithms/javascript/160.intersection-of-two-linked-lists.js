/**
 这个题没限制空间复杂度和时间复杂度。

 方法一： 标记法

 这个题目有要求：
 满足 O(n) 时间复杂度，O(1) 的空间复杂度。

 时间复杂度：O(n+m)
 空间复杂度：O(1)

 const getIntersectionNode = (headA, headB) => {
  while(headA) {
    headA.flag = true;
    headA = headA.next;
  }
  while(headB) {
    if(headB.flag) return headB;
    headB = headB.next;
  }
};

方法二：双指针法

时间复杂度：O(n+m)
空间复杂度：O(1)

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l0 = new ListNode(4);
const l1 = new ListNode(1);
const l2 = new ListNode(8);
const l3 = new ListNode(4);
const l4 = new ListNode(5);
const l5 = new ListNode(5);
const l6 = new ListNode(0);
const l7 = new ListNode(1);

l0.next = l1;
l1.next = l2;
l2.next = l3;
l3.next = l4;

l5.next = l6;
l6.next = l7;
l7.next = l2;

// 8 为相交点

// [4,1,8,4,5]

// [5,0,1,8,4,5]

// 4 1 8 4 5 5 0 1 8 4 5
// 5 0 1 8 4 5 4 1 8 4 5

// 注意：比较的是链表的对象，不是数值。相交点链表的引用是相等的。


const getIntersectionNode = (headA, headB) => {
  let pA = headA;
  let pB = headB;
  while(pA !== pB) {
    pB = pB? pB.next: headA;
    pA = pA? pA.next: headB;
  }
  return pA;
};

console.log(getIntersectionNode(l0, l5));

