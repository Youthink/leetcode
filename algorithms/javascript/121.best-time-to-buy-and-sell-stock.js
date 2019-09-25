/*
输入: [7,1,5,3,6,4]

出乎意料，居然这么快就做出来。。。

思路：

一遍循环的过程中，保存最小价格。如果当前价格比最小价格还小，就更新最小价格。

如果当前值和减去最小价格，比最大利润还大，就更新最大利润。

空间度复杂度： O(1)
时间复杂度：O(n)

第一版：

const maxProfit = (prices) => {
  let minPrice = prices[0];
  let resultProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    if (prices[i] - minPrice > resultProfit) {
      resultProfit = prices[i] - minPrice;
    }
  }
  return resultProfit;
};

优化：
*/

const maxProfit = (prices) => {
  let minPrice = prices[0];
  let resultProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(prices[i], minPrice);
    resultProfit = Math.max(prices[i] - minPrice, resultProfit);
  }
  return resultProfit;
};

 
console.log(maxProfit([7,1,5,4,3,2,1]))

