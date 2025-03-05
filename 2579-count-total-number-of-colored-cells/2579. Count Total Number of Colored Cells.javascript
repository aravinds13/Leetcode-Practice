/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {

    // let result = 1;
    // while(n>0){
    //     result = result + 4*(n-1);
    //     n--;
    // }

    // if(n==1){
    //     return 1
    // }
    // else{
    //     return
    // }
    return n==1 ? 1 : (((n)*(n-1))+n*(n-1)+1)
};