/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    //Using Cantor's diagonalization technique, flipping the value of the i'th digit of the i'th element in the array
    //This gives us a unique element, which is not present in the array

    let result = nums.map((val, i) => (val[i] === '0'?'1':'0')).join('');
    return result;
};