/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set();
    let numsLength = 0;
    nums.map((val) => {
        numsSet.add(val)
        numsLength++;
    });

    return !(numsSet.size == numsLength)
};