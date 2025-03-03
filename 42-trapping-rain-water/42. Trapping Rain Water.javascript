/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const hLength = height.length;
    let leftMax = 0;
    let left = 0;
    let rightMax = hLength-1;
    let right = hLength-1;

    let totalVolume = 0;

    while(left<right){
        if(height[left]<=height[right]){
            if(height[left] < height[leftMax]){
                totalVolume=totalVolume+ (height[leftMax]-height[left])
            }
            else{
                leftMax = left;
            }
            left++;
        }
        else {
            if(height[right] < height[rightMax]){
                totalVolume = totalVolume + (height[rightMax]-height[right])
            }
            else{
                rightMax = right;
            }
            right--;
        }
    }
    return totalVolume;
};