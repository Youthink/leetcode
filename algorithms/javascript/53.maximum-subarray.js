/*
  [-2,1,-3,4,-1,2,1,-5,4]
*/

/*
  第一版
  刚开始学习动态规划。 《算法图解》上说任何的动态规划的题目都可以用表格表示

  每个单元格填写的最长子序列的和

  行: j

  列：i

  |----|----|----|----|----|
  |    | -2 |  1 | -3 |  4 |
  |----|----|----|----|----|
  | -2 | -2 | -1 | -4 |  0 |
  |----|----|----|----|----|
  |  1 |  0 |  1 | -2 |  2 |
  |----|----|----|----|----|
  | -3 |  0 |  0 | -3 |  1 |
  |----|----|----|----|----|
  |  4 |  0 |  0 |  0 |  4 |
  |----|----|----|----|----|

  每个单元格的都可以归结为：

  if (i == j) return arr[i];
  if (j < i) 当前行的上一个和 + arr[i]
  if (j > i) return;

  时间复杂度 O(n^2)

  空间复杂度 O(1)

 */

const maxSubArray = (nums) => {
  let maxSubArraySum = nums[0];
  let currentSum = 0;
  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (i === j) {
        currentSum = nums[i];
      }
      if (j < i) {
        currentSum = nums[i] + currentSum;
      }
      maxSubArraySum = Math.max(maxSubArraySum, currentSum);
    }
  }
  return maxSubArraySum
};

/*
   每个单元格填写的最长子序列的和

  * 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字

  * 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字

  * 每次比较 sum 和 ans 的大小，将最大值置为ans，遍历结束返回结果

  时间复杂度：O(n)

  [-2,1,-3,4,-1,2,1,-5,4]

  |---|---|
  |sum|ans|
  |---|---|
  |-2 |-2 |
  |---|---|
  | 1 | 1 |
  |---|---|
  |-2 | 1 |
  |---|---|
  | 4 | 4 |
  |---|---|
  | 3 | 4 |
  |---|---|
  | 5 | 5 |
  |---|---|
  | 6 | 6 |
  |---|---|
  | 1 | 6 |
  |---|---|
  | 5 | 6 |
  |---|---|

 */

var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
      // if(sum > 0) {
      if(sum + num > num ){
          sum += num;
      } else {
          sum = num;
      }
      ans = Math.max(ans, sum);
    }
    return ans;
};
