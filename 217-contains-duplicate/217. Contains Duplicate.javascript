/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set();
    nums.map((val) => {
        numsSet.add(val)
    });

    return !(numsSet.size == nums.length)
};