/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

// there's a better way to solve this in O(nlog(logn)) using Sieve of Eratosthenes
var closestPrimes = function(left, right) {

    if (left == right){
        return [-1,-1];
    }
    
    //generate Sieve of Eratosthenes

    let sieve = generateSieve(right);

    let num1 = -1;
    let num2 = -1;

    let findNum2 = false;

    const primeMap = new Map();

    for(let i=left; i<=right; i++){
        
        if(sieve[i] == 0){

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

const generateSieve = (right) => {
    let sieve = Array.from({length: right+1}, () => 0)
    sieve[0] = 1
    sieve[1] = 1
    for(let i=2; i*i<=right; i++){
        if(sieve[i] == 0){
            for(let j=i*i; j<=right; j+=i){
                sieve[j] = 1;
            }
        }
    }

    return sieve;
}