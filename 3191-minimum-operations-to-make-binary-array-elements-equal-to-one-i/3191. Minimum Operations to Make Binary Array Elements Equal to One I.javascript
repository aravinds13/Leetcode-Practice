/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const numsLength = nums.length;
    let isGood = true;
    for(let i=0; i<numsLength; i++){
        if(nums[i]!=1){
            isGood = false;
            break;
        }
    }
    if(isGood){
        return 0;
    }

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

    isGood = true;
    for(let i=0; i<numsLength; i++){
        if(nums[i]!=1){
            isGood = false;
            break;
        }
    }

    if(isGood){
        return flipCount;
    }

    return -1
};