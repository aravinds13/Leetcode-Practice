/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binaryStr = n.toString(2).split('').reverse().join('').padEnd(32,'0')
    return parseInt(binaryStr, 2)
};