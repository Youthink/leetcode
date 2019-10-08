/*
输入: [3,2,0,-4] 1

空间度复杂度： O(1)
时间复杂度：O(n)

方法一：给节点打上标记，如果再次遇到，说明是环形链表

const hasCycle = (head) => {
  while(head){
    if (head.flag === 'true') {
      return true;
    } else {
      head.flag = 'true';
      head = head.next;
    }
  }
  return false;
};

方法二：利用 JSON.stringify 不能重复引用的特性

const hasCycle = (head) => {
  try {
    JSON.stringify(head);
    return false;
  } catch {
    return true;
  }
};

方法三：快慢指针

快指针每次走两步，慢指针每次走一步，如果是循环的话，慢指针和快指针会相遇，值相等。

1 - 2 - 3
|_______|

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l0 = new ListNode(3);
const l1 = new ListNode(2);
const l2 = new ListNode(0);
const l3 = new ListNode(-4);

l0.next = l1;
l1.next = l2;
l2.next = l3;
l3.next = l1;

const hasCycle = (head) => {
  let slow = head;
  let fast = head && head.next && head.next.next;
  while(head && fast && slow) {
    if (slow && fast && slow.val === fast.val) {
      return true;
    }
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }
  return false;
};

console.log(hasCycle(l0))

