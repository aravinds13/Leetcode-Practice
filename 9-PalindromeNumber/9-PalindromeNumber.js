/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    if(x==0){
        return true;
    }

    let temp = x;
    let rev = 0;
    while(temp!=0){
        rev = rev*10 + temp%10;
        temp = Math.floor(temp/10);
    }
    return rev === x;
};