/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {

    //had to derive the logic by hand :|
    return n==1 ? 1 : 2*(n*n - n) + 1
};