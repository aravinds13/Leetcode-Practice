/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    console.log(s);
    let currentMax = 0;
    const stringLength = s.length;

    const maxPairs = stringLength - 1;

    for (let round = 0; round < maxPairs; round++){
        let tempMax = countZeros(s.substring(0,round+1)) + countOnes(s.substring(round+1, stringLength));
        if(tempMax > currentMax){
            currentMax = tempMax;
        }
    }
    return currentMax;
};

const countZeros = (str) => {
    return str.split('0').length - 1;
}

const countOnes = (str) => {
    return str.split('1').length - 1;
}