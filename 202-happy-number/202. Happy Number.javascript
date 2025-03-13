/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seenSet = new Set();
    let sum;
    while(n!=1){
        sum = 0;
        if(seenSet.has(n)){
            return false;
        }
        seenSet.add(n);
        while(n>0){

            sum = sum + Math.pow((n%10),2);
            n = Math.floor(n/10);
        }
        n=sum;
    }
    return true;
};