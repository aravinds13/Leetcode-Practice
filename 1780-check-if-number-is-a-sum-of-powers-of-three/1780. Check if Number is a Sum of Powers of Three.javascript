/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    return !n.toString(3).split('').includes('2')
};