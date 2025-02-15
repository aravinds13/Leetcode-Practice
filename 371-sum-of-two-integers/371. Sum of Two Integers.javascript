/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let min = a<=b ? a : b;
    let max = a>b ? a : b;

    while(min!=0){
        

        if(min<0){
            max--;
            min++;
        }
        else{
            max++;
            min--;
        }
    }
    return max;
};