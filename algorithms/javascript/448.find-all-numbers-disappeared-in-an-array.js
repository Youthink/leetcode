/*
  思路：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/solution/zhao-dao-suo-you-shu-zu-zhong-xiao-shi-de-shu-zi-b/
  空间复杂度 O(1) 原地，没有使用额外的空间
  时间复杂度 O(N)

  前提是这个数组的值都是整数

  所以把每个值对应的下标的值改成负数。

  将所有正数作为数组下标，置对应数组值为负值。那么，仍为正数的位置即为（未出现过）消失的数字。
  举个例子：

  • 原始数组：[4,3,2,7,8,2,3,1] 
  • 重置后为：[-4,-3,-2,-7,8,2,-3,-1] 
  结论：[8,2] 分别对应的index为[5,6]（消失的数字）

 */

var findDisappearedNumbers = function(nums) {
  const result = [];
  for (let i = 0; i< nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  for (let i = 0; i< nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

/*
  利用数组下标 js api indexOf
 */
var findDisappearedNumbers = function(nums) {
  let res = [];
  for (let i = 1; i <= nums.length; i++) {
      if (nums.indexOf(i) === -1) {
        res.push(i)
      }
  }
  return res
};

