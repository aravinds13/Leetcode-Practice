/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const complementMap = new Map();
    const arrayLength = nums.length;
    for(let i = 0; i<arrayLength; i+=1){
        if(complementMap.has(nums[i])){
            return([complementMap.get(nums[i]), i])
        }
        let complement = target - nums[i];
        complementMap.set(complement, i);
    }
};