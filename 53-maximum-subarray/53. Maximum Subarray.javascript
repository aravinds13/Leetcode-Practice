/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // const numsLength = nums.length;
    // let max = -Infinity;

    // for(let i=0; i<numsLength; i++){
    //     let end=i;
    //     let prevSum = 0;
    //     while(end<numsLength){
    //         prevSum = prevSum + nums[end];
    //         max = Math.max(prevSum,max);
    //         end++;
    //     }
    // }

    // return max;


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