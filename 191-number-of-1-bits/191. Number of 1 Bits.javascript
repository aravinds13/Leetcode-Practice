/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let counter = 0;
    while(n>0){
        let val = n%2;
        if(val == 1){
            counter++;
        }
        n = Math.floor(n/2);
    }
    return counter
};