/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numsLength = nums.length;
    
    if(numsLength === 0){
        return 0
    }

    let k = 1;

    for(let index=1; index<numsLength; index+=1){
        if(nums[index] !== nums[k-1]){
            nums[k] = nums[index];
            k+=1;
        }
    }

    return k;
};