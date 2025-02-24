/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsLength = nums.length;
    const numSet = new Set();
    nums.map((item) => {
        numSet.add(item);
    })

    for(let i=0; i<=numsLength; i++){
        if(!numSet.has(i)){
            return i;
        }
    }
};