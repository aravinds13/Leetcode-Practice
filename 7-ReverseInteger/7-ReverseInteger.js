/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversedX = 0;
    let isNegative = false;

    const upperLimit = Math.pow(2,31);
    const lowerLimit = upperLimit * -1;

    if(x<0){
        isNegative = true;
        x*=-1;
    }
    while(x!=0){
        reversedX*=10;
        reversedX+=x%10;
        x = Math.floor(x/10)
    }
    if(isNegative){
        reversedX*=-1
    }

    if(reversedX>upperLimit || reversedX<lowerLimit){
        return 0;
    }

    return reversedX;
};