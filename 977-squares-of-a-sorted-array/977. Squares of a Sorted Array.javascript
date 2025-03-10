/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let numsLength = nums.length;
    let left = 0;
    let right = numsLength - 1;

    let resultArray = []

    while(left<=right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            resultArray.push(nums[left]*nums[left])
            left++;
        }
        else{
            resultArray.push(nums[right]*nums[right]);
            right--;
        }
    }

    return resultArray.reverse()
};