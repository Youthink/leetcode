/*

台阶数 方法
1      1      1
2      2      11  2
3      3      111 21 12
4      5      1111 22 112 121 211
5      8      11111 221 1121 1211 122 2111 212 2111

好吧，这是斐波那契数列。我已经忘光了。。。
再学习一下。

斐波那契数列的当前值是前两项的和，前几位如下：
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

公式见维基百科： https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97

方法一： 公式法

时间复杂度：O(log(n))，pow方法将会用去 log(n) 的时间。

空间复杂度：O(1)，使用常量级空间

Math.sqrt() 开平方根
Math.pow() 幂
Math.round() 5.9 => 6

*/
const climbStairs = (n) => {
  const sqrt5 = Math.sqrt(5);
  const temp = Math.pow(((1 + sqrt5) / 2), n + 1) - Math.pow(((1 - sqrt5) / 2), n + 1);
  return Math.round(1 / sqrt5 * temp);
};

/*

方法二： 递归

超出了时间限制

时间复杂度：O(2^n) 树形递归的大小为 2^n2

空间复杂度：O(n)，递归树的深度可以达到 n

*/
const climbStairs = (n) => {
  if (n <= 1) {
    return 1;
  }
  return climbStairs(n - 1) + climbStairs(n -2);
};

/*
方法三：记忆化递归

时间复杂度：O(n)

空间复杂度：O(n)
*/

const memoryArr = [];

const climbStairs = (n) => {
  if (n <= 1) {
    return 1;
  }
  if (memoryArr[n]) {
    return memoryArr[n];
  }
  memoryArr[n] = climbStairs(n - 1) + climbStairs(n -2);
  return memoryArr[n];
};

/*
方法四：斐波那契数 依次相加

时间复杂度：O(n)，单循环到 n，需要计算第 n 个斐波那契数。

空间复杂度：O(1)，使用常量级空间。
*/

const climbStairs = (n) => {
  let first = 1;
  let second = 1;
  let third;
  if (n < 2) {
    return 1;
  }
  for ( let i = 2; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return third;
};

/*
方法五： 动态规划

本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和

爬上 n-1 阶楼梯的方法数量。因为再爬 1 阶就能到第 n 阶
爬上 n-2 阶楼梯的方法数量，因为再爬 2 阶就能到第 n 阶
所以我们得到公式 dp[n] = dp[n-1] + dp[n-2]
同时需要初始化 dp[0]=1 和 dp[1]=1

时间复杂度 O(n)
空间复杂度 O(n)
*/

const climbStairs = (n) => {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for ( let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
};

console.log(climbStairs(3))

