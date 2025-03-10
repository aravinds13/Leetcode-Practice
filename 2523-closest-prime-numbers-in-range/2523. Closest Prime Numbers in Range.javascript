/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

// there's a better way to solve this in O(nlog(logn)) using Sieve of Eratosthenes
// var closestPrimes = function(left, right) {

//     if (left == right){
//         return [-1,-1];
//     }
    
//     //generate Sieve of Eratosthenes

//     let sieve = generateSieve(right+1);

//     let num1 = -1;
//     let num2 = -1;

//     let findNum2 = false;

//     // [num1, num2]

//     let minDiff = Infinity
//     let res = [-1, -1]

//     for(let i=left; i<=right; i++){
        
//         if(sieve[i]){

//             // if findNum2 is true, assign value to num2, otherwise assign it to num1
//             findNum2 ? (num2 = i) : (num1 = i);

//             // flip the value of findNum2
//             findNum2 = !findNum2;

//             // check if primes have been assigned to both variables
//             if(num1 > -1 && num2 > -1){
//                 let diff = Math.abs(num1 - num2)
//                 if(diff < minDiff){
//                     minDiff = diff
//                     res = [num1, num2]
//                 }
//             }

//         }
//     }

//     // set minimum value first
//     if(res[0] > res[1]){
//         [res[1], res[0]] = [res[0], res[1]]
//     }

//     return res

// };

// const generateSieve = (right) => {
//     let sieve = Array.from({length: right}, () => true)
//     sieve[0] = false
//     sieve[1] = false
//     for(let i=2; i*i<=right; i++){
//         if(sieve[i] == true){
//             for(let j=i*i; j<=right; j+=i){
//                 sieve[j] = false;
//             }
//         }
//     }

//     return sieve;
// }

var closestPrimes = function(left, right) {
    
    let primes = sievePrime(right);

    let primeList = [];

    let minVal = Infinity;
    let minPrimeList = [];
    
    for(let i = left ; i<=right ; i++){
        if(primes[i]){
            primeList.push(i);
        }
    }

    for(let i=0; i<primeList.length-1 ; i++){
        let dup = 0;
        dup = primeList[i + 1] - primeList[i];
        if(minVal>dup){
            minVal = dup;
            minPrimeList = [primeList[i],primeList[i+1]];
            console.log(minPrimeList);
        }
    }
    if(minVal==Infinity){
        return [-1,-1];
    }
    return minPrimeList;
};

function sievePrime(n){
        let primes = new Array(n+1).fill(true);
        primes[0]=primes[1]=false;

        for(let i=2; i * i  <=n; i++ ){
            if(primes[i]){
                for(j=i*i ; j<=n ; j+=i){
                    primes[j]=false;
                }
            }
        }
        return primes;
};
