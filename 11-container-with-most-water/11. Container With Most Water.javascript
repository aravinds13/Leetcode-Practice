/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    const heightLength = height.length;
    
    let maxVolume = 0;

    let i=0;
    let j=heightLength-1;

    while(i!=j){
        let minHeight = Math.min(height[i], height[j]);
        let currentVolume = minHeight * (j-i);
        maxVolume = Math.max(maxVolume, currentVolume);
        if(height[i]<=height[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return maxVolume
};