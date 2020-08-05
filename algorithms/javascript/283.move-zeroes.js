/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i=0;
    var j=0;//找非零的元素
    for(j=0;j<nums.length;j++) {
        if(nums[j]!=0) {
            nums[i]=nums[j];
            i++;
        }
    }
    for(var k=nums.length;k>i;k--) {
        nums[k-1]=0;
    }
}
