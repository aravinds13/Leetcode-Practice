/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    //using prefix and suffix arrays

    let prefix = []
    let suffix = []
    let answer = []
    const numsLength = nums.length;
    prefix[0] = 1;
    suffix[numsLength-1] = 1;
    for(i=1, j=numsLength-2; i<=numsLength, j>=0; i++, j--){
        prefix[i] = prefix[i-1]*nums[i-1];
        suffix[j] = suffix[j+1]*nums[j+1];
    }
    
    for(i=0; i<numsLength; i++){
        answer[i] = prefix[i]*suffix[i];
    }

    return answer;
};