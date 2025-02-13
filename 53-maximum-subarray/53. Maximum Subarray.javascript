/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    // using Kadane's approach

    const numsLength = nums.length;
    let currentSum = nums[0];
    let maxSum = nums[0];

    for(i=1; i<numsLength; i++){
        currentSum = Math.max(nums[i], currentSum+nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    } 

    return maxSum;

};