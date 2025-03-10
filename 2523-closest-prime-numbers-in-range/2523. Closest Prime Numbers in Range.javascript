/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

// there's a better way to solve this in O(n) using Sieve of Eratosthenes
var closestPrimes = function(left, right) {
    if (left == right){
        return [-1,-1];
    }

    let num1 = -1;
    let num2 = -1;

    let findNum2 = false;

    // map to store the prime pairs and their difference
    // key: difference, value: prime pair
    // only store the first occurance of a difference (based on the question)
    const primeMap = new Map();

    for(let i=left; i<=right; i++){
        
        if(isPrime(i)){

            // if findNum2 is true, assign value to num2, otherwise assign it to num1
            findNum2 ? (num2 = i) : (num1 = i);

            // flip the value of findNum2
            findNum2 = !findNum2;

            // check if primes have been assigned to both variables
            if(num1 > -1 && num2 > -1){
                let diff = Math.abs(num1 - num2)
                if(!primeMap.has(diff)){
                    primeMap.set(diff, [num1, num2])
                }
            }

        }
    }

    // if we don't find at least two primes in the range, return -1, -1
    if(num1 == -1 || num2 == -1){
        return [-1,-1]
    }

    let minDiff  = Infinity;

    // find the prime pair with the minimum difference from the map
    primeMap.forEach((value, key) => {
        minDiff = Math.min(minDiff, key);
    })

    let result = primeMap.get(minDiff);

    // set minimum value first
    if(result[0] > result[1]){
        [result[0], result[1]] = [result[1], result[0]]
    }

    return result
};

const isPrime = (val) => {
    if(val<=1){
        return false;
    }
    if(val == 2 || val == 3){
        return true;
    }
    for(let i=2; i<=Math.sqrt(val); i++){
        if(val%i == 0){
            return false
        }
    }
    return true;
}