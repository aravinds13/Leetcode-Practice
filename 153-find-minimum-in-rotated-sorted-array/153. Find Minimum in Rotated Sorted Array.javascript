/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const numsLength = nums.length;
    let currMin = nums[0];
    if(numsLength == 1){
        return nums[0];
    }
    if(nums[0]<nums[numsLength-1]){
        return nums[0];
    }
    for(let i=0; i<numsLength-1; i++){
        if(nums[i]>nums[i+1]){
            return nums[i+1];
        }
    }
};