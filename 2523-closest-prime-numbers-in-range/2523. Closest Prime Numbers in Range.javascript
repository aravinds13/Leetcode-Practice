/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    if (left == right){
        return [-1,-1];
    }

    let num1 = -1;
    let num2 = -1;

    let findNum2 = false;

    const primeMap = new Map();

    for(let i=left; i<=right; i++){

        if(i==2){
            num1 = i
            findNum2 = true
        }
        
        if(!(i%2==0) && isPrime(i)){
            if(!findNum2){
                num1 = i
                findNum2 = true
            }
            else{
                num2 = i;
                findNum2 = false
            }

            if(num1 > -1 && num2 > -1){
                let diff = Math.abs(num1 - num2)
                if(!primeMap.has(diff)){
                    primeMap.set(diff, [num1, num2])
                }
            }

        }
    }
    if(num1 == -1 || num2 == -1){
        return [-1,-1]
    }

    let minSum  = Infinity;

    primeMap.forEach((value, key) => {
        minSum = Math.min(minSum, key);
    })

    let result = primeMap.get(minSum);

    if(result[0] > result[1]){
        [result[0], result[1]] = [result[1], result[0]]
    }

    return result
};

const isPrime = (val) => {
    if(val<=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(val); i++){
        if(val%i == 0){
            return false
        }
    }
    return true;
}