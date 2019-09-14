/*

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

*/

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

// 1->2->4
const l11 = new ListNode(4);
const l22 = new ListNode(2, l11);
const l33 = new ListNode(1, l22);

// 1->3->4
const l55 = new ListNode(4);
const l66 = new ListNode(3, l55);
const l77 = new ListNode(1, l66);

/*
 时间复杂度 O(n + m)

 空间复杂度 O(n + m)

 */

const mergeTwoLists = (l1, l2) => {
  if(!l1){
    return l2;
  }
  if(!l2){
    return l1;
 }

  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l2.next,l1);
    return l2;
  } else {
    l1.next = mergeTwoLists(l2, l1.next);
    return l1;
  }
};

console.log(mergeTwoLists(l33, l77));

/*
l1: 1 -> 2 -> 5
l2: 0 ->3 -> 4

刚开始做 leetcode。智商感人，研究了半天。
写一写我的思考，希望能帮大家更好的理解。
分步拆解：
1、首先哪个链表开头的数字最小，就是最终要返回的链表。因为所有数字都要排在他后面。
我们拿 l1: 1 -> 2 -> 5 l2: 0 ->3 -> 4 分析，因为 1 大于 0，所以 l2 就是最终被返回的链表，因为所以的字段都排在他后面。

2、从链表的第一个元素来看，就有了下面的这一步，

if (l1.val > l2.val) {
  return l2;
}

3、既然 l2 做了开头，那之后的结果要排在 l2 的后面，也就是赋值给 l2.next

if (l1.val > l2.val) {
  l2.next = mergeTwoLists();
  return l2;
}

4、然后就是确定传给 mergeTwoLists 的参数，这两个参数，是不分先后顺序的。因为 l2.val 已经比较过了，剩下的就是比较 l1 和 l2.next, 就有了下面的这步

if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l2.next,l1);
    return l2;
  }

5、l2 的 0 已经穿进糖葫芦的杆里了，0 ----> 剩下的就是串其他的山楂，把它们都放在 mergeTwoLists 函数里沾点糖，
l2.next 和 l1 再次进入了函数，也就是 l2: 3-> 4 和 l1: 1-> 2 -> 5 比较，这时候已经不满足上面的判断了，就要写判断的另一种可能了。
这时候 l1 开头的数字更小，就返回 l1。  

返回的都是小值，直到最后。 

if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l2.next,l1);
    return l2;
  } else {
    return l1;
  }

6、同理后面的值，都要排在本次的返回值后面了。

if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l2.next,l1);
    return l2;
  } else {
    l1.next = mergeTwoLists();
    return l1;
  }
7、mergeTwoLists 的参数也好确认，就是还要继续比较的值。 l1.next 和 l2  2 -> 5 和 3 -> 4 

8、糖葫芦继续串下去就是， 0 -> 1 -> 2  剩下 5 和 3 -> 4 比较， 就成了 0 -> 1 -> 2 -> 3 剩下了 5 和 4 比较，成了  0 -> 1 -> 2 -> 3 -> 4 

最后剩下了 5 和 4.next (传给 mergeTwoLists 的 l2 已经是 null 了)，这时候我们可以结束递归了。 没有 l2 了，说明 l1 还剩一个值，也就是最后一个值，返回 l1 就行了。

if (!l2) {
  return l1;
}

9、同理最后一个值也有可能是 l1,也要判断一下

if (!l2) {
  return l1;
}

总结一下

既然是递归，肯定是在递归相同的逻辑，只是参数不同。而这个逻辑就是：

先找出最小的值 a 然后其他值，都挂在 a.next 上


再有类似的题，就是找递归逻辑。

如果误人子弟了，请大家帮忙指正。
*/
