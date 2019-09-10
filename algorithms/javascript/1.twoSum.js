/*
   [3,2,4],6
   [-1,-2,-3,-4,-5],-8
   [2,7,11,15],9
*/


/*
 1、最简单的思路，两次循环

 时间复杂度 O(n^2)

 空间复杂度 O(1)

 要注意循的开始值和长度
 */

const twoSum = (nums, target) => {
  for (let i = 0; i< nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/*
   hash 法

   时间复杂度 O(n)

   空间复杂度 O(n)
 */

const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[target - num] !== undefined) {
      return [hash[target - num], i]
    }
    hash[num] = i;
  }
}

{3: 0, 2: 1,4:2}
