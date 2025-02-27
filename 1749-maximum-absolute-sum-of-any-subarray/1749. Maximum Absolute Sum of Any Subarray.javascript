/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    const numsLength = nums.length;

    let maxSum = 0;
    let minSum = 0;
    let currentMax = 0;
    let currentMin = 0;

    for(let i=0; i<numsLength; i++){
        currentMax = Math.max(nums[i], currentMax+nums[i]);
        currentMin = Math.min(nums[i], currentMin+nums[i])
        maxSum = Math.max(currentMax, maxSum);
        minSum = Math.min(currentMin, minSum);
    }
    return Math.max(maxSum, Math.abs(minSum));
};