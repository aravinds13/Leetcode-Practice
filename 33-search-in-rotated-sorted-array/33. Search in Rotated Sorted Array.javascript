/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// attempt using shifted binary search
var search = function(nums, target) {
    const arrayLength = nums.length;
    var smallestIndex = 0;

    var found = null;

    for(i=0;i<arrayLength-1;i++){ // find index of smallest element
        if(nums[i]>nums[i+1]){
            smallestIndex = i+1;
        }
    }

    var right = arrayLength - 1;
    var left = smallestIndex;
    found = binarySearch(left, right, nums, target)

    if(found == -1){
        right = smallestIndex-1;
        left = 0;
        found = binarySearch(left, right, nums, target)
    }
    return found
};

var binarySearch = (left, right, nums, target) => {
    var mid = null;
    while(left<=right){
        mid = Math.floor((left+right)/2);
        if(nums[mid] == target){
            return mid
        }
        else if(target < nums[mid]) {
            right = mid-1;
        }
        else {
            left = mid+1;
        }
    }
    return -1
}