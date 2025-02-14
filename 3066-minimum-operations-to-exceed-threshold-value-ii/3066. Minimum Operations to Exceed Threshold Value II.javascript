/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((a,b) => a-b);

    const arr = [];

    let counter=0, x , y;
    const numsLength = nums.length;
    for(let i=0, j=0; ; counter++){

        if(i<numsLength && !(nums[i]>arr[j])){
            x = nums[i];
            i++;
        }
        else{
            x = arr[j];
            j++;
        }

        if(!(k>x)) {
            return counter;
        }

        if(i<numsLength && !(nums[i]>arr[j])){
            y = nums[i];
            i++;
        }
        else{
            y = arr[j];
            j++;
        }

        arr.push(x*2 + y);
    }
    return -1
};