/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const numsLength = nums.length;

    let digitSumArray = [];

    const indexMap = new Map();

    // create an array with the sum of digits of all the values
    nums.forEach((element) => {
        let sum = 0;
        while(element!=0){
            sum = sum + element%10;
            element = Math.floor(element/10);
        }
        digitSumArray.push(sum);
    })

    const digitSet = new Set(digitSumArray);

    //check if all the elements in the digitSumArray are unique
    if(digitSet.size == digitSumArray.length){
        return -1
    }


    let max = 0;

    //map with sum of values whose sum of digits is same
    for(let i=0; i<numsLength; i++){
        if(indexMap.has(digitSumArray[i])){
            let val = indexMap.get(digitSumArray[i])
            if(nums[i] > val[1] && nums[i]<=val[0]){
                val[1] = nums[i];
            }
            else if(nums[i] >= val [0]){
                val[1] = val[0];
                val[0] = nums[i]
            }

            let sum = val[0]+val[1];
            max = Math.max(sum,max);
            indexMap.set(digitSumArray[i], val);
        }
        else{
            indexMap.set(digitSumArray[i], [nums[i],0]);
        }
    }


    return max
};