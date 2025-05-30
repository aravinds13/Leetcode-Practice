/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const complementMap = new Map();
    const numsLength = nums.length;
    for(let i=0; i<numsLength; i++){
        if(complementMap.has(nums[i])){
            return [complementMap.get(nums[i]), i];
        }
        let complement = target - nums[i];
        complementMap.set(complement,i);
    }
    return
};