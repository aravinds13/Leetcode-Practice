/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// attempt using shifted binary search
var search = function(nums, target) {
    const arrayLength = nums.length;
    var smallestIndex = modBinarySearch(0, arrayLength-1, nums);

    var found = null;

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

var modBinarySearch = (left, right, nums) => { //find smallest element
    while(left<=right){
        if(nums[left]<=nums[right]){
            return left;
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