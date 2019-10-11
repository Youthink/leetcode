/**
 这个题没限制空间复杂度和时间复杂度。

 方法一： 哈希值法

 空间复杂度：O(n)
 时间复杂度：O(n)

 const majorityElement = (nums) => {
  const maxObj = {count: 1, key: nums[0]}
  nums.reduce((acc, item) => {
    if (acc[item]) {
      const newCount = acc[item] + 1;
      acc[item] = newCount;
      // if (newCount > maxObj.count) {
      // 因为众数要求大于 n/2, 所以众数只会存在一个，只要找重复数量最多的值即可。
      if (newCount > nums.length / 2) {
        maxObj.count = newCount;
        maxObj.key = item;
      }
      return acc;
    }
    acc[item] = 1;
    return acc;
  },{});
  return maxObj.key;
};

方法二：排序法

空间复杂度：O(1) 插入排序 或者 O(nlogn) 快排
时间复杂度：O(nlogn) 快排

// js sort 使用的排序算法，可以看我这篇文章。
// https://segmentfault.com/a/1190000010648740

const majorityElement = (nums) => {
  nums.sort();
  return nums[parseInt(nums.length/2, 10)];
};


方法三：Boyer-Moore 投票算法

空间复杂度：O(1)
时间复杂度：O(n
 
 */

const majorityElement = (nums) => {
  let mostNum = null, count = 0;
  nums.forEach(o => {
    if (count === 0) {
      mostNum = o;
    }
    count += (o !== mostNum) ? -1 : 1;
  });
  return mostNum;
};

console.log(majorityElement([7, 7, 5, 7, 5, 1,5, 7,5, 5, 7, 7,7, 7, 7, 7]));
