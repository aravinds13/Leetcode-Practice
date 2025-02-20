/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const numsLength = nums.length;

    let val = 0;
    while(val.toString(2).length<=numsLength){
        if(nums.includes(val.toString(2).padStart(numsLength,'0'))){
            val++;
        }
        else{
            break;
        }
    }
    return val.toString(2).padStart(numsLength,'0')
};