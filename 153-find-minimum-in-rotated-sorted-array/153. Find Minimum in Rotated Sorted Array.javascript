/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const numsLength = nums.length;
    if(numsLength == 1){
        return nums[0];
    }

    let left = 0;
    let right = numsLength-1;

    if(nums[left]<nums[right]){
        return nums[left];
    }

    return modBinarySearch(nums,left, right)
    // for(let i=0; i<numsLength-1; i++){
    //     if(nums[i]>nums[i+1]){
    //         return nums[i+1];
    //     }
    // }
};

const modBinarySearch = (nums,left,right) => {
    while(left<=right){
        if(nums[left]<=nums[right]){
            return nums[left];
        }
        else{
            let mid = Math.floor((left+right)/2);
            if(nums[left]>nums[mid]){
                right = mid;
            }
            else{
                left = mid+1;
            }
        }
    }
}