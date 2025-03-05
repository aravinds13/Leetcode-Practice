/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {

    let result = 1;

    while(n>0){
        result = result + 4*(n-1);
        n--;
    }
    return result
};