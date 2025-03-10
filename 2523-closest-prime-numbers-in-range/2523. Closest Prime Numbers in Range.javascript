/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

// Using Sieve of Eratosthenes
var closestPrimes = function(left, right) {

    if (left == right){
        return [-1,-1];
    }
    
    //generate Sieve of Eratosthenes

    let sieve = generateSieve(right+1);

    const primeArr = [];

    for(let i = left; i<=right; i++){
        if(sieve[i]){
            primeArr.push(i);
        }
    }

    let num1 = -1;
    let num2 = -1;

    let findNum2 = false;

    let minDiff = Infinity
    let res = [-1, -1]

    primeArr.forEach((i) => {
        // if findNum2 is true, assign value to num2, otherwise assign it to num1
        findNum2 ? (num2 = i) : (num1 = i);

        // flip the value of findNum2
        findNum2 = !findNum2;

        // check if primes have been assigned to both variables
        if(num1 > -1 && num2 > -1){
            let diff = Math.abs(num1 - num2)
            if(diff < minDiff){
                minDiff = diff
                res = [num1, num2]
            }
        }
    })

    // set minimum value first
    if(res[0] > res[1]){
        [res[1], res[0]] = [res[0], res[1]]
    }

    return res

};

const generateSieve = (right) => {
    let sieve = new Array(right).fill(true)
    sieve[0] = false
    sieve[1] = false
    for(let i=2; i*i<=right; i++){
        if(sieve[i] == true){
            for(let j=i*i; j<=right; j+=i){
                sieve[j] = false;
            }
        }
    }

    return sieve;
}