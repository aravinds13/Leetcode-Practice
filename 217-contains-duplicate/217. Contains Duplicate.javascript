/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numMap = new Map();
    
    for(const element of nums){
        if(numMap.get(element)){
            return true;
        }
        else{
            numMap.set(element, 1);
        }
    }
    return false;
};