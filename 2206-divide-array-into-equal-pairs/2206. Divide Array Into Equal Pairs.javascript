/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const numsLength = nums.length;
    if(numsLength%2 != 0){
        return false
    }
    const countMap = new Map();
    nums.map((val) => {
        if(countMap.has(val)){
            countMap.set(val, countMap.get(val)+1);
        }
        else{
            countMap.set(val, 1);
        }
    })
    let flag = true
    countMap.forEach((value, key) => {
        if(value%2 != 0){
            flag = false;
        }
    })
    return flag
};