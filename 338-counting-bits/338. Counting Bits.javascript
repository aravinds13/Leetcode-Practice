/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let countArray = [0]
    for(let i=1; i<=n; i++){
        countArray.push(Number(i).toString(2).split('0').join('').length);
    }
    return countArray
};