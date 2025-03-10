/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let numsLength = nums.length;
    let left = 0;
    let right = numsLength - 1;

    let resultIndex = numsLength - 1;

    let resultArray = []

    while(left<=right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            resultArray[resultIndex] = nums[left]*nums[left];
            left++;
        }
        else{
            resultArray[resultIndex] = nums[right]*nums[right];
            right--;
        }
        resultIndex--;
    }

    return resultArray
};