/**

  动态规划

  思考过程

  [2,7,9,3,1]

  dp(1) 就是第一项 2
  dp(2) 就是前两项的最大值 7
  dp(3) dp(n-2) + 第三项之和与 dp(2) 的最大值
  依次类推

  再复杂的动态规划问题，都可以通过这三步来解决。
  难点在于第一步，即将问题分解成最优子问题。找到了最优子问题，问题就解决了一大半。
  第二步不过是将第一步的思路用递归代码表述出来；
  至于第三步递归转迭代，毕竟有递归的基本逻辑可以参考，多加练习可以较熟练的掌握。

  -- 来自 leetcode


 方法一： 递归， 不可取
 数组里的值会有重复计算的情况，导致超时，
 暂时没有想到方法缓存计算过的值。

const rob = nums => {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length < 2) {
    return nums[0];
  }
  const left = nums[0] + rob(nums.slice(2));
  const right = nums[1] + rob(nums.slice(3));
  return Math.max(left, right);
  // return Math.max(rob(nums.slice(0, -2)) + nums[nums.length -1], rob(nums.slice(0, -1)))
};

方法二：迭代

时间复杂度：O(n)
空间复杂度：O(1)

官方的答案：

const rob = nums => {
  let prevMax = 0;
  let currMax = 0;
  nums.forEach(num => {
    let temp = currMax;
    currMax = Math.max(prevMax + num, currMax);
    prevMax = temp;
  });
  return currMax;
};

2, 7, 9, 3, 1
prevMax = 0; currMax = 0; temp = currMax = 0; currMax = Math.max(prevMax 0 + num 2, currMax); 2 prevMax = temp;
prevMax = 0; currMax = 2; temp = currMax = 2; currMax = Math.max(prevMax 0 + num 7, currMax); 7 prevMax = temp;
prevMax = 2; currMax = 7; temp = currMax = 7; currMax = Math.max(prevMax 2 + num 9, currMax); 11 prevMax = temp;
prevMax = 7; currMax = 11; temp = currMax = 11; currMax = Math.max(prevMax 7 + num 3, currMax); 11 prevMax = temp;
prevMax = 11; currMax = 11; temp = currMax = 11; currMax = Math.max(prevMax 11 + num 1, currMax); 12 prevMax = temp;

另一种答案：

};*/

const rob = nums => {
  const len = nums.length;
  if (len === 0) return 0;

  const dp = [0];
  dp[1] = nums[0];

  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i-2] + nums[i-1], dp[i-1]);
  }
  return dp[len];
}
/*

dp1 = nums[0] = 2
dp2 = max(dp[1], nums[1])
dp3 = max(dp2, dp1 + nums[2])
dp4 = max(dp3, )

*/

console.log("re", rob([2, 7, 9, 3, 1]));
