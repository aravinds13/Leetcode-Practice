/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const numsLength = nums.length;
    let strikeOne = false;
    for(let i=0; i<numsLength-1; i++){

        if(strikeOne && nums[i]>nums[i+1]){
            return false;
        }
        else if(nums[i]>nums[i+1]){
            strikeOne = true;
        }
    }
    if(strikeOne && nums[0]<nums[numsLength-1]){
        return false
    }

    return true;
};