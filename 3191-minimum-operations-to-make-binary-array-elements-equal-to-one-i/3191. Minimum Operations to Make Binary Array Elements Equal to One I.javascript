/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const numsLength = nums.length;
    let flipCount = 0;

    for(let i=0; i<numsLength-2; i++){
        if(nums[i]==1){
            continue;
        }
        else{
            nums[i] = 1;
            nums[i+1] = (nums[i+1] == 1) ? 0 : 1;
            nums[i+2] = (nums[i+2] == 1) ? 0: 1;
            flipCount++;
        }
    }

    if(nums[numsLength-1] == 0 || nums[numsLength-2] == 0){
        return -1;
    }

    return flipCount;
};