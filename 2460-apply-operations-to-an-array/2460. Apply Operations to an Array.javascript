/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const numsLength = nums.length;
    let zeroArray = []
    for(let i=0; i<numsLength;i++){
        if(nums[i] == 0){
            zeroArray.push(0);
        }
        if(i == numsLength - 1){
            continue
        }
        if(nums[i] == nums[i+1]){
            nums[i]*=2;
            nums[i+1] = 0;
        }
    }

    nums = nums.filter((item) => item!=0)
    nums.push(...zeroArray)

    return nums
};