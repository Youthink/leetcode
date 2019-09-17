/*

本题有两个要求：

1、线性时间复杂度 O(n)
2、不需要额外的存储空间

位运算中的异或运算 XOR:

1、一个数和 0 做 XOR 运算等于这个数本身： 0 ⊕ a = a
2、一个数和他本身做 XOR 运算等于 0 ： a ⊕ a = 0
3、XOR 运算满足交换律和结合律：a ⊕ b ⊕ a = (a ⊕ a) ⊕ b = 0 ⊕ b = b

本题，也就是相同的数做 XOR 运算会得到 0，0 再和唯一的数字做 XOR 运算等于它本身，就求出唯一数字了。

就跟消消乐一样，相同的抵消掉。
*/

const singleNumber = (nums) => {
  let ans = 0;

  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};

console.log(singleNumber([1,1,2,2,4]))
