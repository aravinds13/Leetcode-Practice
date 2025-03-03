/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let preArray = [];
    let postArray = [];
    let inArray = [];
    nums.forEach((item) => {
        if(item>pivot){
            postArray.push(item);
        }
        else if(item<pivot){
            preArray.push(item);
        }
        else{
            inArray.push(item);
        }
    })

    return [...preArray,...inArray,...postArray]
};