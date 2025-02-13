/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    //keeping track of min and max products, since min can become max if a negative number is encountered

    const numsLength = nums.length;

    let minProduct = nums[0];
    let maxProduct = nums[0];
    let result = nums[0];

    for(let i=1; i<nums.length; i++){
        if(nums[i]<0){
            [minProduct, maxProduct] = [maxProduct, minProduct];
        }

        maxProduct = Math.max(nums[i], maxProduct*nums[i])
        minProduct = Math.min(nums[i], minProduct*nums[i])

        result = Math.max(result, maxProduct);
    }    

    return result;
};