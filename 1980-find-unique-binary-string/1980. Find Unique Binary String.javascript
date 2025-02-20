/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const numsLength = nums.length;

    const numsSet = new Set();

    nums.forEach((element) => {
        numsSet.add(parseInt(element,10))
    })
    let val = 0
    while(val.toString(2).length<=numsLength){
        if(numsSet.has(parseInt(val.toString(2),10))){
            val++
        }
        else{
            break;
        }
    }
    return val.toString(2).padStart(numsLength,'0')
};